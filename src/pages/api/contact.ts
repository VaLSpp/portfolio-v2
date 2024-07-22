import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const { EMAIL_NODE, PASS_NODE } = process.env

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // ixgb kefa deiw ycie
        const transporter = nodemailer.createTransport
            ({
                host: 'smtp.gmail.com' as string,
                port: Number('587' as string),
                secureConnection: false,
                auth: {
                    user: EMAIL_NODE as string,
                    pass: PASS_NODE as string,
                },
                tls: {
                    ciphers: 'SSLv3',
                },
            } as SMTPTransport.Options)
        // ({
        //     // service: 'gmail',
        //     host: 'smtp.gmail.com',
        //     port: '587',
        //     secureConnection: false,
        //     auth: {
        //         user: EMAIL_NODE, //Di ganti dengan email perusahaan
        //         pass: PASS_NODE, //Di ganti dengan password aplikasi perusahaan
        //     },
        //     tls: {
        //         ciphers: 'SSLv3',
        //     },
        // } as SMTPTransport.Options);

        const mailOptions = {
            from: `${email}`,
            to: EMAIL_NODE,
            replyTo: `${email}`,
            subject: 'New message from your website',
            html: `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Metavulus Registration</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
          rel="stylesheet"
        />
    
        <style>
          body {
            font-family: "Roboto", sans-serif;
          }
    
          h3 {
            font-size: 6px;
          }
    
          h1 {
            font-size: 7.7px;
          }
    
          .date {
            color: white;
          }
    
          .main {
            width: 330px;
          }
    
          .logo {
            width: 20%;
          }
    
          .logo-container {
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            width: 100%;
            background-color: #62ce2e;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
    
          .hero-container {
            width: 100%;
            margin-top: 10px;
            background-color: white;
          }
    
          .hero-title {
            margin: auto;
          }
    
          .hero-items {
            width: 100%;
          }
    
          .icon {
            width: 40%;
          }
    
          .get-inspired {
            margin-top: 10px;
            width: 100%;
            border-bottom: 1px solid white;
          }
    
          .button-container {
            margin-left: auto;
            margin-right: auto;
            background-color: red;
            margin-bottom: 10px;
          }
    
          .button-text {
            color: white;
            padding: 0 6em;
            text-decoration: underline;
          }
    
          .video-section {
            margin-top: 10px;
            border-bottom: 1px solid white;
          }
    
          .video-container-first {
            width: 33%;
          }
    
          .video-container-second {
            width: 100px;
            padding: 5px;
            margin-left: auto;
            margin-right: auto;
          }
    
          .video-thumbnail {
            width: 100%;
          }
    
          .video-thumbnail-second {
            width: 100%;
          }
    
          .thumbnail-text {
            color: white;
            text-align: center;
            font-size: 5.5px;
          }
    
          .thumbnail-text-second {
            color: white;
            text-align: center;
            font-size: 4.6px;
          }
    
          .red {
            color: red;
          }
    
          .underline {
            text-decoration: underline;
          }
    
          .youtube-works {
            width: 100%;
            margin-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid white;
          }
    
          .youtube-works h1 {
            color: white;
            font-size: 7.3px;
          }
    
          .youtube-works-content {
            width: 100%;
          }
    
          .gif {
            width: 100%;
          }
    
          .link {
            font-size: 9px;
            color: white;
          }
    
          .footer {
            margin-top: 10px;
            margin-bottom: 70px;
          }
    
          .footer p {
            font-size: 5px;
          }
    
          .item-container {
            padding: 0 0.1em;
            width: 33%;
          }
    
          .item-container h3 {
            font-size: 6px;
          }
    
          .item-border {
            border-left: 1px solid black;
            border-right: 1px solid black;
          }
    
          @media screen and (min-width: 720px) {
            .main {
              width: 730px;
            }
    
            .date {
              font-size: 12px;
            }
    
            .logo-container {
              width: 100%;
            }
    
            .hero-container {
              width: 100%;
              margin-top: 20px;
              background-color: white;
            }
    
            .hero-title h1 {
              font-size: 14px;
            }
    
            .hero-items {
              width: 100%;
            }
    
            .item-container {
              width: 33%;
            }
    
            .item-container h3 {
              font-size: 13px;
            }
    
            .icon {
              width: 50%;
            }
    
            .get-inspired {
              margin-top: 0px;
              padding-bottom: 20px;
              width: 100%;
              border-bottom: 3px solid white;
            }
    
            .button-container {
              margin-left: auto;
              margin-right: auto;
              background-color: red;
              margin-bottom: 10px;
            }
    
            .button-text {
              color: white;
              padding: 0 5em;
              text-decoration: underline;
              font-size: 20px;
            }
    
            .video-section {
              margin-top: 10px;
              border-bottom: 3px solid white;
            }
    
            .video-section h1 {
              font-size: 17px;
              text-align: justify;
            }
    
            .video-container-first {
              width: 33%;
            }
    
            .video-container-second {
              width: 250px;
              padding: 5px;
              margin-left: auto;
              margin-right: auto;
            }
    
            .video-thumbnail {
              width: 100%;
            }
    
            .video-thumbnail-second {
              width: 100%;
            }
    
            .thumbnail-text {
              color: white;
              text-align: center;
              font-size: 13.5px;
            }
    
            .thumbnail-text-second {
              font-size: 11.5px;
            }
    
            .red {
              color: red;
            }
    
            .underline {
              text-decoration: underline;
            }
    
            .youtube-works {
              width: 100%;
              margin-top: 10px;
              padding-bottom: 30px;
              border-bottom: 3px solid white;
            }
    
            .youtube-works h1 {
              color: white;
              font-size: 17px;
            }
    
            .youtube-works-content {
              width: 100%;
            }
    
            .gif {
              width: 100%;
            }
    
            .link {
              font-size: 18px;
              color: white;
              font-weight: bold;
            }
    
            .footer {
              margin-top: 10px;
              margin-bottom: 100px;
            }
    
            .footer p {
              font-size: 12px;
            }
            .item-border {
              border-left: 3px solid black;
              border-right: 3px solid black;
            }
          }
        </style>
      </head>
      <body>
        <table
          class="main"
          style="
            background-color: #ffffff;
            padding: 0px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <tbody>
            <tr>
              <td>
                <table class="outer-container" style="width: 100%">
                  <tbody>
                    <tr>
                      <td>
                        <table class="inner-container" style="width: 100%">
                          <tbody>
                            <tr>
                              <td>
                                <!-- Hero Container-->
                                <table class="hero-container">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <!--Hero Content-->
                                        <table class="hero-title">
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h1 style="font-size: 2em">
                                                    New message from your website
                                                </h1>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--Get Inspired-->
                                <table class="get-inspired">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <!--Button-->
                                        <table style="margin-right: auto">
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h1 style="font-size: 1.5em">
                                                  Here's your detail
                                                </h1>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                
                                                <p style="font-size: 1em">
                                                Name: ${name}
                                                </p>
                                                <p style="font-size: 1em">
                                                Email: ${email}
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--Message-->
                                <table class="footer">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <p>
                                          ${message}
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
    `,
        };

        try {
            if (!name || !email || !message) {
                res.status(400).json({ message: 'Please fill in all fields' });
            } else {
                const info = await transporter.sendMail(mailOptions);
                console.log(info, "<<<");
                res.status(200).json({ message: 'Email sent successfully' });
            }
        } catch (error) {
            console.error(error);
            console.log(error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, surname, email, phone, message } = await request.json();

  // Nodemailer yapılandırması
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Farklı bir e-posta servisi kullanıyorsanız burayı güncelleyin
    auth: {
      user: process.env.EMAIL_USER, // .env dosyasına email bilgilerinizi ekleyin
      pass: process.env.EMAIL_PASS, // .env dosyasına email şifrenizi ekleyin
    },
  });

  const mailOptions = {
    from: email,
    to: 'hedefemail@adresiniz.com', // Hedef e-posta adresini buraya girin
    subject: `Yeni Mesaj - ${name} ${surname}`,
    text: `
      İsim: ${name} ${surname}
      Email: ${email}
      Telefon: ${phone}
      Mesaj: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

const payload = require('payload');

async function resetPassword() {
    await payload.init({
        secret: 'd352b952-16fc-4632-bd93-19965d1b32d2', // You can find this in your project's .env file
        mongoURL: 'mongodb+srv://davethan-website:Davethan%40101@cluster0.fblzoee.mongodb.net/davethan-website?retryWrites=true&w=majority&appName=Cluster0', // Paste your MongoDB Atlas connection string here
        local: true,
    });

    const result = await payload.update({
        collection: 'users',
        where: { email: { equals: 'info@davethan.tech' } },
        data: {
            password: 'Davethan@101', // Type your desired new password
        },
    });

    console.log('Password updated successfully for:', result.docs[0].email);
    process.exit(0);
}

resetPassword();
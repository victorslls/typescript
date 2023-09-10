interface ImailTo{
name: string;
email:string;
}

interface IMailMessage {
subject:string;
body:string;
attachment?: string[]
}



class EmailService {
    sendMail(to: ImailTo, message: IMailMessage){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
        
    }
}

export default EmailService
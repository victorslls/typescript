import EmailService from "@src/services/EmailService";
import { Request, Response } from "express";

const users = [{
    name: "Diego", email: "diego@rocketseat.com.br"
}]    ;

export default {
    async index(req: Request, res: Response){
        
        return res.json(users)
    },

    async create(req:Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({name: 'Diego', email: 'diego@rocketseat.com.br'},
        {subject: 'Bem-vindo', body: 'Seja Bem-vinda'}); 
        
        return res.send()


    }
} 
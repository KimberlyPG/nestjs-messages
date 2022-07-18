import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
// service that will be inside of a controller that will call 
//some aprpropiated methos whenever someone makes a request to find a particular message
@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content: string ) {
        return this.messagesRepo.create(content);
    }
}
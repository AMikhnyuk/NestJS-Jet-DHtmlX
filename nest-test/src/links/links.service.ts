import { Injectable } from '@nestjs/common';
import { Link } from './models/link.model';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LinksService {
  constructor(@InjectRepository(Link) private linkModel: Repository<Link>) {}

  async getAllLinks(): Promise<Link[]> {
    return await this.linkModel.find();
  }

  async createLink(link: Link): Promise<Link> {
    return await this.linkModel.save(link);
  }
  async updateLink(link: Link): Promise<UpdateResult> {
    return await this.linkModel.update(link.id, link);
  }
  async removeLink(id): Promise<DeleteResult> {
    return await this.linkModel.delete(id);
  }
}

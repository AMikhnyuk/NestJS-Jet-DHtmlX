import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { Link } from './models/link.model';

@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @Get()
  async getAllLinks(): Promise<Link[]> {
    return await this.linksService.getAllLinks();
  }

  @Post()
  async createLink(@Body() linkData: Link): Promise<Link> {
    return await this.linksService.createLink(linkData);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() linkData: Link): Promise<any> {
    linkData.id = Number(id);
    console.log('Update #' + linkData.id);
    return this.linksService.updateLink(linkData);
  }
  @Delete(':id')
  async removeLink(@Param('id') id: number): Promise<any> {
    console.log(id);
    return await this.linksService.removeLink(id);
  }
}

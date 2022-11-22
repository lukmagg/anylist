/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Param, ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Item)
  async createItem(
    @Args('createItemInput') createItemInput: CreateItemInput
  ): Promise<Item> {
    return await this.itemsService.create(createItemInput);
  }

  @Query(() => [Item], { name: 'items' })
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item' })
  async findOne(
    @Args('id', { type: () => ID }, ParseUUIDPipe ) id: string
    ): Promise<Item> {
    return await this.itemsService.findOne(id);
  }

  @Mutation(() => Item)
  async updateItem(
    @Args('updateItemInput', { type: () => UpdateItemInput }) updateItemInput: UpdateItemInput
    ): Promise<Item> {
    return this.itemsService.update(updateItemInput.id, updateItemInput);
  }

  @Mutation(() => Item)
  removeItem(
    @Args('id', { type: () => ID }, ParseUUIDPipe ) id: string
    ): Promise<Item> {
    return this.itemsService.remove(id);
  }
}

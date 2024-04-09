import { Model, Document, FlattenMaps } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async save(entity: Partial<T>): Promise<T> {
    return this.model.create(entity);
  }

  async findBy(query: any): Promise<FlattenMaps<T>[]> {
    return this.model.find(query).lean().exec();
  }

  async findOneBy(query: any): Promise<FlattenMaps<T> | null> {
    return this.model.findOne(query).lean().exec();
  }

  async update(id: string, entity: Partial<T>): Promise<FlattenMaps<T> | null> {
    return this.model
      .findByIdAndUpdate(id, entity, { new: true })
      .lean()
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }

  async checkIfExists(query: any): Promise<boolean> {
    const count = await this.model.countDocuments(query);
    return count > 0;
  }
}

import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
	@Column
	name!: string;

	@Column
	lastName!: string;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}




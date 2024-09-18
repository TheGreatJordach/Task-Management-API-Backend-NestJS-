import { Entity } from "typeorm/decorator/entity/Entity";
import { RegistryDate } from "../../common/embedded/registry-date";
import { AfterInsert, AfterRemove, AfterUpdate, Column, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-roles";

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  firstName:string
  @Column()
  lastName:string
  @Column({unique:true})
  email:string
  @Column()
  password:string

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole

  @Column(() => RegistryDate,{ prefix:false})
  registry: Date


  @AfterUpdate()
  afterUpdate() {
    // Perform side-effect (e.g., logging the operation details)
    const log = {
      date: new Date().toISOString(),  // Get current date instead of using registry if needed
      userId: this.id,
      name: `${this.firstName}`,
      operation: 'UPDATED',
      status: 'SUCCESSFUL',
    };

    // Example: log to console or pass to a logging service
    console.log('Update Operation:', log);
  }

  @AfterInsert()
  afterInsert() {
    // Perform side-effect (e.g., logging the operation details)
    const log = {
      date: new Date().toISOString(),  // Get current date instead of using registry if needed
      userId: this.id,
      name: `${this.firstName}`,
      operation: 'INSERT',
      status: 'SUCCESSFUL',
    };

    // Example: log to console or pass to a logging service
    console.log('Insert Operation:', log);
  }

  @AfterRemove()
  afterRemove() {
    // Perform side-effect (e.g., logging the operation details)
    const log = {
      date: new Date().toISOString(),  // Get current date instead of using registry if needed
      userId: this.id,
      name: `${this.firstName}`,
      operation: 'REMOVE',
      status: 'SUCCESSFUL',
    };

    // Example: log to console or pass to a logging service
    console.log('Remove Operation:', log);
  }
}

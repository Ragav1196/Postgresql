import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ragav1196",
    database: "Quiz",
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],/* 4 -> The entity that is created "<quiz.entity.ts>" is used here  */
    synchronize: true, /* this is the one that automatically sunchronise the data that we gave in "<quiz.entity.ts>" file.  */
};
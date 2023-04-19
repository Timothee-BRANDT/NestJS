import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		super({ /* super calls the contructor of the Class i'm extending */
			datasources: {
				db: {
					url : 'postgresql://postgres:123@localhost:5434/nest?schema=public'
				}
			}
		})
	}
}

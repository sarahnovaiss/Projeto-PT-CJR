import { prisma } from './script';


export async function main() {
    await prisma.user.updateMany({
        data: {
            departamento: 'Updated Departamento',
            curso: 'Updated Curso',
            password: 'Updated Password',
            photo: Buffer.from('Updated Photo')
        }
    });
    console.log('Update completed successfully.');
}
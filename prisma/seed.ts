import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '17ff50de-fafc-4dc3-92ff-39066078e802',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect()
});

import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient()

const main = async()=>{
    //create (insert data)
    //single user

//const user=await prisma.user.create({
    
    //    data:{
        //    name:"Jiya",
      //      email:"jiyaagrawal6395@gmail.com"
  //      },
  //  })
  //  console.log(user)

    //multiple user
/*
      const newUsers=await prisma.user.createMany({
    
        data:[  
            { name:"Ketan", email:"ketanagrawal6395@gmail.com"},
              { name:"Deepika", email:"deepikaagrawal6395@gmail.com"},
    ],
      
    })
    console.log(newUsers)
    */

    /*
//read data
//get all users
const users=await prisma.user.findMany()
console.log(users)
*/

/*
//get single user by id
const user=await prisma.user.findUnique({
    where:{id:5},
})
console.log(user)
*/

/*
//get users with filtering
const user=await prisma.user.findMany({
    where:{name:"Jiya"},
})
console.log(user)
*/


/*
//update data
const updateduser=await prisma.user.update({
    where:{id:5},
    data:{email:"deepu123@gmail.com"},
})
console.log(updateduser)
*/


/*
//update multiple user
const updateduser=await prisma.user.updateMany({
    where:{id:5},
    data:{name:"Deepika"},
})
console.log(updateduser)
*/


/*
const updateduser=await prisma.user.update({
    where:{id:5},
    data:{email:"deepu123@gmail.com"},
})
console.log(updateduser)
*/

/*
//delete (remove data)
//delete one user
const deleteduser=await prisma.user.delete({
    where:{id:4},
  
})
console.log(deleteduser)
*/

//delete multiple user
const deleteduser=await prisma.user.delete({
    where:[{id:4},{id:1}],
  
})
console.log(deleteduser)


}
main()
.catch((e)=>console.log(e))
.finally(async()=>{
    await prisma.$disconnect()
})


//prisma generate--> Updates the prisma client code so you can use the latest schema in your application
var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/create', async function(req, res) {
const userData = await userModel.create({
  username: "shubham",
  nickname: "python",
  description: "I’m shubham",

  categories: ["react native","java","python","react","ai/ml"]

  })
  res.send(userData);
});

router.get('/find', async function(req, res) {
  //let regexp = new RegExp("^shubham$","i");
  // let user = await userModel.find({
  //   categories: { '$all': ['react native'] }
  // }); // it will give you all the users who have "fashion" in their categories

  let date1 = new Date('2024-09-03')
  let date2 = new Date('2024-09-04')

  let user = await userModel.find({dateCreated: {$gte: date1, $lte: date2}})//it will give every user data from Greater Than Equal(gte) to  Less Than Equal(lte)
   
  res.send(user);
});
router.get('/failed', function(req, res) {
    req.flash("age",20);
    console.log("flash")
    res.send("failed")
    
});
router.get('/checkflash', function(req, res) {
    console.log(req.flash("age"));
    res.send("flash checked")

});

module.exports = router;


// FLASH MESSAGE:-

//FLASH MSG KA MTLB JAB HM KISI V ROUTE MAH DATA BANANA AND US DATA KO DUSRE ROUTE MAH USE KR PANA

//EX: agr login hojaye to login page ke baad profile page dikhao...agar kuch glt hota h toh is route se kisi aur route lejao jaisa ki /error mah aur wahn par error msg show krdo

//WE CAN'T USE THE DATA OF ONE ROUTE IN ANOTHER ROUTE BUT FLASH ALLOWS US TO USE THE DATA OF ONE ROUTE IN ANOTHER ROUTE

//req.flash("name",data)



//new RegExp("name","i") => when anyone will search in find() with any type i.e capital or in small letters then it will give all the related username with it ex: like in DB there are usernmar with harsh,harshita, harshvardhan and u have searched harsh then all data will be viewed  and "i" is for insensitive whether u seatrch in small or capital it will give

//IF WE WANT ONLY ONE HARSH AND NO MORE UGGESTION WITH IT'S THEN WE CAN USE:

// ^ => start
//$ => end

//RegExp("^haRsH$") => it will give only that name only
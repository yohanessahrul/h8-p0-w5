/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    var newArray = []; // big warp   
    
    // stok product
    var stokSepatu = listBarang[0][2];
    var stokZoro = listBarang[1][2];
    var stokUniklooh = listBarang[2][2];
    
    // tampung ke varibel masing2 *push
    var pembeliSepatu = [];
    var pembeliZoro = [];
    var pembeliUniklooh = [];
    
    for(var i=0; i<shoppers.length; i++){
      if(shoppers[i].product === 'Sepatu Stacattu'){
        if(stokSepatu >= shoppers[i].amount){ // jika stok masih ada, maka bisa dijual
          pembeliSepatu.push(shoppers[i].name);
          stokSepatu -= shoppers[i].amount;
        }
      } else if(shoppers[i].product === 'Baju Zoro'){
        if(stokZoro >= shoppers[i].amount){
          pembeliZoro.push(shoppers[i].name);
          stokZoro -= shoppers[i].amount;
        }
      } else if(shoppers[i].product === 'Sweater Uniklooh'){
        if(stokUniklooh >= shoppers[i].amount){
          pembeliUniklooh.push(shoppers[i].name);
          stokUniklooh -= shoppers[i].amount;
        }
      }
    }
    
    
    var pembeli;
    var sisa;
    
    for(var l=0; l<listBarang.length; l++){
      if(listBarang[l][0] === 'Sepatu Stacattu'){
        pembeli = pembeliSepatu;
        sisa = stokSepatu;
        totProfit = (listBarang[l][2]- stokSepatu) * listBarang[l][1];
      } else if(listBarang[l][0] === 'Baju Zoro'){
        pembeli = pembeliZoro;
        sisa = stokZoro;
        totProfit = (listBarang[l][2] - stokZoro) * listBarang[l][1];
      } else if(listBarang[l][0] === 'Sweater Uniklooh'){
        pembeli = pembeliUniklooh;
        sisa = stokUniklooh;
        totProfit = (listBarang[l][2] - stokUniklooh) * listBarang[l][1];
      }
      
      
      var objectProduct = {};
      objectProduct.product = listBarang[l][0];
      objectProduct.shoppers = pembeli;
      objectProduct.leftOver = sisa;
      objectProduct.totalProfit = totProfit;
      newArray.push(objectProduct);
    }
  
    return newArray;
    
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  // console.log(countProfit([])); //[]
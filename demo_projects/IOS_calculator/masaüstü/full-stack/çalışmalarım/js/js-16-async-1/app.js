/*
Asynchronous JavaScript (Asenkron JavaScript), bir işlemin tamamlanmasını beklemeden kodun diğer bölümlerinin çalışmasını sağlayan bir programlama yaklaşımıdır. Bu, özellikle zaman alan işlemlerin (örneğin, veri tabanı sorguları, API çağrıları veya dosya işlemleri) kullanıcı deneyimini engellemeden çalıştırılmasını sağlamak için önemlidir.

Neden Asenkron JavaScript?
Normalde, JavaScript tek iş parçacıklı (single-threaded) bir dil olduğundan, bir işlem tamamlanana kadar diğer kodlar çalışamaz. Asenkron yapı, uzun süreli işlemlerin tamamlanmasını beklemeden kodun akmaya devam etmesine olanak tanır. */

// ! ****1-Callback Fonksiyonları:**** Asenkron işlemler tamamlandıktan sonra ne yapılacağını belirten fonksiyonlardır. 

console.log("birinci");

setTimeout(()=>{
    console.log(" ikinci iki saniye sonra çalışır");
},2000);

console.log("üçüncü");

// ! ****2-Promises:***** Asenkron işlemleri daha düzenli bir şekilde yönetmek için kullanılan bir yapıdır.

//  Bir Promise şu durumlarda olabilir:
// ? Pending (Beklemede): İşlem devam ediyor.
// ? Resolved (Çözüldü): İşlem başarıyla tamamlandı.
// ? Rejected (Reddedildi): İşlem başarısız oldu. 
// 非同期処理（Promise）
let a = 0;

init();
async function init(){
    try {
        const resolve =  await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
            console.log(resolve);
    } catch (e) {
        console.log('catchが実行', e)
    }
  
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })
    
}


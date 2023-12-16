// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
//ประการตัว ทำงาน
const daungroetai = document.querySelector(".counter");
const inc_btn = document.querySelector('.btn-inc');
const dec_btn = document.querySelector('.btn-dec');
const clr_btn = document.querySelector('.btn-clr');
let count = 0;
//อัพเดทแสดงผล
function updateCount(count) {
  document.querySelector('.number').textContent = count;
}
//การทำงานของ บวก +
inc_btn.addEventListener('click', function () {
  count += 1;
  updateCount(count);
});
//การทำงานของ ลบ -
dec_btn.addEventListener('click', function () {
  if (count > 0) {
    count -= 1;
    updateCount(count);
  }
});
//การทำงานของ C 
clr_btn.addEventListener('click', function () {
  count = 0;
  updateCount(count);
});
//DAUNGROETAI  AUBONBAN KKTECH 
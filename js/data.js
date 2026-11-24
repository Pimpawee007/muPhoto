// Replace these sample records with API responses when the admin backend is ready.
export const photo='/assets/sample.jpg';
export const instagramUrl='https://www.instagram.com/muphoto.club/'; // Verify the club's exact handle before production.
export const announcements=[
 {id:'first-focus',title:'First Focus, Look Through the Lens โฟกัสแรกพบ สบตากันหลังกล้อง',category:'Workshop',status:'Closed',date:'18 พฤศจิกายน 2569',time:'16:30 – 20:00 น.',place:'มหาวิทยาลัยมหิดล',description:'กิจกรรมแรกพบของชมรม เปิดโอกาสให้สมาชิกใหม่ได้รู้จักกัน แลกเปลี่ยนมุมมองและทดลองถ่ายภาพร่วมกัน',link:'',ig:''},
 {id:'recruitment',title:'MU Photo Club — We’re Hiring!',category:'Recruitment',status:'Closed',date:'9 พฤศจิกายน 2569',time:'ตลอดวัน',place:'ออนไลน์',description:'เปิดรับสมาชิกทีมงานที่สนใจร่วมสร้างสรรค์กิจกรรมและบันทึกเรื่องราวผ่านภาพถ่าย',link:'',ig:''},
 {id:'join-club',title:'เปิดรับสมัครสมาชิก MU Photo Club',category:'Membership',status:'Open',date:'ตลอดปีการศึกษา',time:'ตลอดวัน',place:'ออนไลน์',description:'พื้นที่สำหรับทุกคนที่รักการถ่ายภาพ ไม่จำเป็นต้องมีอุปกรณ์ระดับมืออาชีพ',link:'',ig:''},
 {id:'photo-connect',title:'Photo Connect — กิจกรรมถ่ายภาพร่วมกัน',category:'Activity',status:'Open',date:'เร็ว ๆ นี้',time:'รอประกาศ',place:'มหาวิทยาลัยมหิดล',description:'พบปะสมาชิกและสนุกกับการถ่ายภาพในมุมมองใหม่ ๆ',link:'',ig:''}
];
export const activities=[
 {id:'first-focus',title:'First Focus, Look Through the Lens',subtitle:'โฟกัสแรกพบ สบตากันหลังกล้อง',category:'Activity',date:'18 พฤศจิกายน 2569',time:'16:30 – 20:00 น.',place:'มหาวิทยาลัยมหิดล',description:'ภาพบรรยากาศกิจกรรมแรกพบของสมาชิกชมรมหลังกล้องมหิดล'},
 {id:'one-day-trip',title:'One Day Trip',subtitle:'1 วันกับหลังกล้อง ณ อยุธยา',category:'Photo Walk',date:'15 กุมภาพันธ์ 2569',time:'09:00 – 18:00 น.',place:'จังหวัดพระนครศรีอยุธยา',description:'ออกเดินทางและสำรวจเมืองผ่านเลนส์ของสมาชิกชมรม'},
 {id:'photo-workshop',title:'From Zero to Photo',subtitle:'Beginner Workshop',category:'Workshop',date:'19 ตุลาคม 2568',time:'13:00 – 16:00 น.',place:'มหาวิทยาลัยมหิดล',description:'เรียนรู้พื้นฐานการถ่ายภาพสำหรับผู้เริ่มต้น'},
 {id:'photo-connect',title:'Photo Connect',subtitle:'ภาพถ่ายเชื่อมมิตรภาพ',category:'Activity',date:'4 เมษายน 2568',time:'13:00 – 17:00 น.',place:'มหาวิทยาลัยมหิดล',description:'รวมโมเมนต์และความทรงจำของสมาชิกชมรม'}
];
export const albums=[
 {id:'first-focus',title:'First Focus, Look Through the Lens',subtitle:'โฟกัสแรกพบ สบตากันหลังกล้อง',year:2026,date:'18 พฤศจิกายน 2569'},
 {id:'photo-connect',title:'Photo Connect',subtitle:'โพโต้สัมพันธ์ MU-CU-TU',year:2025,date:'4–6 เมษายน 2568'},
 {id:'one-day-trip',title:'One Day Trip',subtitle:'1 วันกับหลังกล้อง ณ อยุธยา',year:2025,date:'15 กุมภาพันธ์ 2568'},
 {id:'from-zero',title:'From Zero to Photo',subtitle:'Beginner Workshop',year:2025,date:'19 ตุลาคม 2568'}
];
export const sampleImages=Array.from({length:12},(_,i)=>({src:photo,position:['center center','left center','right center','center top','center bottom'][i%5]}));

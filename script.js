const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const profiles={
 chairman:{role:'CHAIRMAN & CEO',title:'এমডি সবুজ হালদার',text:'প্রতিষ্ঠানের সামগ্রিক নেতৃত্ব, কৌশলগত পরিকল্পনা, ব্র্যান্ড ভিশন ও পরিচালনার দায়িত্বে। যোগাযোগ: 01872707010 | mrboka7010@gmail.com'},
 md:{role:'MANAGING DIRECTOR',title:'Managing Director',text:'পদটি বর্তমানে শূন্য। ভবিষ্যতে যোগ্য ও উপযুক্ত প্রার্থী নিয়োগ করা হবে।'},
 coo:{role:'CHIEF OPERATING OFFICER',title:'COO',text:'পদটি বর্তমানে শূন্য। ভবিষ্যতে যোগ্য ও উপযুক্ত প্রার্থী নিয়োগ করা হবে।'},
 creative:{role:'CREATIVE & MULTIMEDIA',title:'Creative & Multimedia Director',text:'পদটি বর্তমানে শূন্য। ভবিষ্যতে যোগ্য ও উপযুক্ত প্রার্থী নিয়োগ করা হবে।'},
 tech:{role:'TECHNOLOGY & DIGITAL',title:'Chief Technology & Digital Officer',text:'পদটি বর্তমানে শূন্য। ভবিষ্যতে যোগ্য ও উপযুক্ত প্রার্থী নিয়োগ করা হবে।'}
};
const dialog=document.getElementById('profileDialog'), content=document.getElementById('dialogContent');
function openProfile(key){const p=profiles[key];content.innerHTML=`<span class="modal-role">${p.role}</span><h3 class="modal-title">${p.title}</h3><p class="modal-text">${p.text}</p>${key==='chairman'?'<p><a class="btn primary" href="tel:+8801872707010">📞 কল করুন</a></p>':''}`;dialog.showModal();}
document.querySelectorAll('[data-profile]').forEach(el=>el.addEventListener('click',()=>openProfile(el.dataset.profile)));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

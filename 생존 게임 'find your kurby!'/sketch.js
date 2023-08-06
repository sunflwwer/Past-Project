let xPos;
let yPos;
let ap;
let ap1;
let aap;
let aap1;
let img;
let img1;
let img2;
let img3;
let count;
let count1;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;


function setup(){

  createCanvas(640,480);
  img = loadImage("cc.png");
  img1 = loadImage("co.png");
  img2 = loadImage("bb.png");
  img3 = loadImage("op2.png");
  img5 = loadImage("gold.png");
  img6 = loadImage("hh.png");
  img7 = loadImage("this.png");
  img8 = loadImage("go.png");
  img9 = loadImage("tree.png");
  img10 = loadImage("goal.png");
  img11 = loadImage("ccu.png");
  img12 = loadImage("ccl.png");
  img13 = loadImage("ccd.png");
  img14 = loadImage("cou.png");
  img15 = loadImage("col.png");
  img16 = loadImage("cod.png");
  

  image(img11,width/2-150,height/2+10,40,30);
  
  xPos=0;
  yPos=80;
  count = 5;
  count1 = 0;
  ap = 1100/1.859375;
  ap1 = 1100/1.859375;
  aap=540;
  aap1=540;
  textSize(26);
  fill(0);
  text("Find your Kirby!\n\nStart = key Pressed\nMove with key 'w', 'a', 's', 'd'\n\nGood Luck~",width/2-170,height/2-95);

  //2.1875
  //1.859375
}

function draw(){
  if(xPos>585) {xPos=585;}
  if(xPos<0) {xPos=0;}
  if(yPos<0) {yPos=0;}
  if(yPos>435) {yPos=435;}

  if(count<=0 ){//게임종료
    background(0);
    textSize(50);
    fill(255);
    text("GAME OVER",width/2-150,height/2+20);
    noFill();
  }

  if(xPos>270&& xPos<320 && yPos>350 && yPos<400){//성공
    background(255);
    textSize(50);
    fill(0);
    text("SUCCESS",width/2-120,height/2+10);
    noFill();
  }

    if(xPos<10&&yPos>120&& yPos<200){{ xPos = 650 }{yPos=230}}//화살표이동

    if(xPos>-100 && xPos<480 ) {//첫번째 벽
      if(yPos>90&& yPos<130){ yPos = 90 }
    }
    if(xPos>460 && xPos<480 ) {//첫번째 오른쪽벽
      if(yPos>90&& yPos<150){ xPos = 480 }
    }
    if(xPos>-100 && xPos<480 ) {//첫번째 아래벽
      if(yPos>130&& yPos<150){ yPos = 150 }
    }
    if(xPos>-100 && xPos<480 ) {//두번째 벽
      if(yPos>180&& yPos<230){ yPos = 180 }
    }
    if(xPos>460 && xPos<480 ) {//두번째 오른쪽벽
      if(yPos>180&& yPos<280){ xPos = 480 }
    }
    if(xPos>-100 && xPos<480 ) {//두번째 아래벽
      if(yPos>260&& yPos<280){ yPos = 280 }
    }
    if(xPos>100 && xPos<1000 ) {//세번째 벽
      if(yPos>320&& yPos<340){ yPos = 320 }
    }
    if(xPos>100 && xPos<120 ) {//세번째 오른쪽벽
      if(yPos>320&& yPos<380){ xPos = 100 }
    }
    if(xPos>100 && xPos<1000) {//세번째 아래벽
      if(yPos>340&& yPos<380){ yPos = 380 }
    }
    if(xPos>520 && xPos<1000 ) {//작은 벽
      if(yPos>220&& yPos<240){ yPos = 220 }
    }
    if(xPos>510 && xPos<540 ) {//작은 오른쪽벽
      if(yPos>220&& yPos<280){ xPos = 510 }
    }
    if(xPos>520 && xPos<1000 ) {//작은 아래벽
      if(yPos>240&& yPos<290){ yPos = 290 }
    }
}

function keyPressed(){
  
  image(img2,0,0,640,480);
  
  noStroke();
  textSize(20);
  text(count,1000/1.859375+30,900/2.1875+10);
  text(count1,1000/1.859375+30,950/2.1875+10);
  text("Life:",1000/1.859375-50+30,900/2.1875+10)
  text("Gold:",1000/1.859375-50+30,950/2.1875+10)
 

  image(img3,210/1.859375,200/2.1875,70/1.859375,70/2.1875);
  image(img3,400/1.859375,150/2.1875-20,70/1.859375,70/2.1875);
  image(img3,600/1.859375,200/2.1875,70/1.859375,70/2.1875);
  image(img3,1100/1.859375,130/2.1875,70/1.859375,70/2.1875);
  image(img3,300/1.859375,730/2.1875-55,70/1.859375,70/2.1875);
  image(img3,650/1.859375,730/2.1875,70/1.859375,70/2.1875);
  image(img3,90,800/2.1875,150/1.859375-5,150/2.1875-5);
 
  image(img5,150/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,350/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,550/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,750/1.859375,430/2.1875,70/1.859375,70/2.1875);

  image(img6,ap,5,70/1.859375,70/2.1875);//하트
  image(img6,ap1,700/2.1875,70/1.859375,70/2.1875);
  image(img7,0,180,40,40);
  image(img8,0,230,488,47);
  image(img9,0,80,488,70);
  image(img10,290,420,40,30);
 
  strokeWeight(3);
  stroke(0);
  rect(0,500/2.1875,900/1.859375,5/2.1875);
  rect(1060/1.859375,610/2.1875,800000/1.859375,5/2.1875);
  rect(300/1.859375,810/2.1875,1190/1.859375,5/2.1875);
 
if (key==='a'){
xPos = xPos-10;
if(xPos>60 && xPos<150 && yPos>40 && yPos<120){//첫보스
  count=count-1;
  
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>260 && xPos<350 && yPos>40 && yPos<120){//셋째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
      count=count-1;
      tint(255,0,0)
      console.log("DIE");}

      if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
        count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
    count1=count1+1;
    tint(255,191,0);
    console.log("gold");}
    if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
      count1=count1+1;
      tint(255,191,0);
      console.log("gold");}
    if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
    if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        
image(img15,xPos,yPos,100/1.859375,100/2.1875);
}
if (key==='d'){
xPos = xPos+10;

if(xPos>60 && xPos<150 && yPos>40 && yPos<120){//첫보스
  count=count-1;
  
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>260 && xPos<350 && yPos>40 && yPos<120){//셋째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
      count=count-1;
      tint(255,0,0)
      console.log("DIE");}

      if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
        count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
    count1=count1+1;
    tint(255,191,0);
    console.log("gold");}
    if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
      count1=count1+1;
      tint(255,191,0);
      console.log("gold");}
    if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
    if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        image(img1,xPos,yPos,100/1.859375,100/2.1875);
}
if (key==='s'){
yPos = yPos+10;
if(xPos>60 && xPos<150 && yPos>40 && yPos<120){//첫보스
  count=count-1;
  
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>260 && xPos<350 && yPos>40 && yPos<120){//셋째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
      count=count-1;
      tint(255,0,0)
      console.log("DIE");}

      if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
        count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
    count1=count1+1;
    tint(255,191,0);
    console.log("gold");}
    if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
      count1=count1+1;
      tint(255,191,0);
      console.log("gold");}
    if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
    if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        
image(img16,xPos,yPos,100/1.859375,100/2.1875);
}
if (key==='w'){
yPos = yPos-10;
if(xPos>60 && xPos<150 && yPos>40 && yPos<120){//첫보스
  count=count-1;
  
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>260 && xPos<350 && yPos>40 && yPos<120){//셋째보스
  count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
    count=count-1;
    tint(255,0,0)
    console.log("DIE");}
  if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
      count=count-1;
      tint(255,0,0)
      console.log("DIE");}

      if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
        count=count-1;
  tint(255,0,0)
  console.log("DIE");}

  if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
    count1=count1+1;
    tint(255,191,0);
    console.log("gold");}
    if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
      count1=count1+1;
      tint(255,191,0);
      console.log("gold");}
    if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
    if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
        count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        
image(img14,xPos,yPos,100/1.859375,100/2.1875);
}
  
    if(xPos>aap && xPos<800 && yPos>-100 && yPos<40){//첫 하트
        count=count+1;
        ap = ap+1000;
        aap=aap+1000;
        console.log("heart");}
    if(xPos>aap1 && xPos<800 && yPos>280 && yPos<350){//둘 하트
        count=count+1;
        ap1 = ap1+1000;
        aap1=aap1+1000;
        console.log("heart");}
noTint();
}


function keyReleased(){
  
  image(img2,0,0,640,480);
  
  noStroke();
  textSize(20);
  text(count,1000/1.859375+30,900/2.1875+10);
  text(count1,1000/1.859375+30,950/2.1875+10);
  text("Life:",1000/1.859375-50+30,900/2.1875+10)
  text("Gold:",1000/1.859375-50+30,950/2.1875+10)
 
 
  image(img3,210/1.859375,200/2.1875,70/1.859375,70/2.1875);
  image(img3,400/1.859375,150/2.1875-20,70/1.859375,70/2.1875);
  image(img3,600/1.859375,200/2.1875,70/1.859375,70/2.1875);
  image(img3,1100/1.859375,130/2.1875,70/1.859375,70/2.1875);
  image(img3,300/1.859375,730/2.1875-55,70/1.859375,70/2.1875);
  image(img3,650/1.859375,730/2.1875,70/1.859375,70/2.1875);
  image(img3,90,800/2.1875,150/1.859375-5,150/2.1875-5);
 
  image(img5,150/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,350/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,550/1.859375,430/2.1875,70/1.859375,70/2.1875);
  image(img5,750/1.859375,430/2.1875,70/1.859375,70/2.1875);
 
  image(img6,ap,5,70/1.859375,70/2.1875);//하트
  image(img6,ap1,700/2.1875,70/1.859375,70/2.1875);
  image(img7,0,180,40,40);
  image(img8,0,230,488,47);
  image(img9,0,80,488,70);
  image(img10,290,420,40,30);
 
  strokeWeight(3);
  stroke(0);
  rect(0,500/2.1875,900/1.859375,5/2.1875);
  rect(1060/1.859375,610/2.1875,800000/1.859375,5/2.1875);
  rect(300/1.859375,810/2.1875,1190/1.859375,5/2.1875);
 
    if (key==='a'){
    xPos = xPos-10;
    if(xPos>60 && xPos<150 && yPos>50 && yPos<120){//첫보스
      //count=count-1;
      
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>260 && xPos<350 && yPos>50 && yPos<120){//셋째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
        //count=count-1;
        tint(255,0,0)
        console.log("DIE");}
        if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
        if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
    
          if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
            //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
        //count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
    image(img12,xPos,yPos,100/1.859375,100/2.1875);
      }
    if (key==='d'){
    xPos = xPos+10;
    if(xPos>60 && xPos<150 && yPos>50 && yPos<120){//첫보스
      //count=count-1;
      
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>260 && xPos<350 && yPos>50 && yPos<120){//셋째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
        //count=count-1;
        tint(255,0,0)
        console.log("DIE");}
        if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
        if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
    
          if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
            //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
        //count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
    image(img,xPos,yPos,100/1.859375,100/2.1875);
      }
    if (key==='s'){
    yPos = yPos+10;
    if(xPos>60 && xPos<150 && yPos>50 && yPos<120){//첫보스
      //count=count-1;
      
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>260 && xPos<350 && yPos>50 && yPos<120){//셋째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
        //count=count-1;
        tint(255,0,0)
        console.log("DIE");}
        if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
        if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
    
          if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
            //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
        //count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
    image(img13,xPos,yPos,100/1.859375,100/2.1875);
    }
    if (key==='w'){
    yPos = yPos-10;
    if(xPos>60 && xPos<150 && yPos>50 && yPos<120){//첫보스
      //count=count-1;
      
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>170 && xPos<260 && yPos>0 && yPos<80){//둘째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>260 && xPos<350 && yPos>50 && yPos<120){//셋째보스
      //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>550&& xPos<1000 && yPos>20 && yPos<100){//넷째보스
        //count=count-1;
        tint(255,0,0)
        console.log("DIE");}
        if(xPos>100&& xPos<200 && yPos>220 && yPos<320){//다섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
        if(xPos>300&& xPos<380 && yPos>280 && yPos<350){//여섯째보스
          //count=count-1;
          tint(255,0,0)
          console.log("DIE");}
    
          if(xPos>30 && xPos<170 && yPos>320 && yPos<420){//마지막보스
            //count=count-1;
      tint(255,0,0)
      console.log("DIE");}
    
      if(xPos>30 && xPos<120&& yPos>150 && yPos<230){//첫 금
        //count1=count1+1;
        tint(255,191,0);
        console.log("gold");}
        if(xPos>150 && xPos<220&& yPos>150 && yPos<230){//둘 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>250 && xPos<340&& yPos>150 && yPos<230){//셋 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
        if(xPos>350 && xPos<440&& yPos>150 && yPos<230){//넷 금
          //count1=count1+1;
          tint(255,191,0);
          console.log("gold");}
    image(img11,xPos,yPos,100/1.859375,100/2.1875);
    }

    noTint();
}
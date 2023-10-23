let Ids=[]
let PregnanciesNumbers=[]
let Glucoses=[]
let BloodPressures=[]
let SkinThicknesses=[]
let Insulins=[]
let BMIs=[]
let DiabetesPedigreeFunctions=[]
let Ages=[]
let Outcomes=[]

for (let i=0;i<Results.length;i++) {
  row=Results[i];
  Ids.push(row.Id);
  PregnanciesNumbers.push(row.Pregnancies);
  Glucoses.push(row.Glucose);
  BloodPressures.push(row.BloodPressure);
  SkinThicknesses.push(row.SkinThickness);
  Insulins.push(row.Insulin);
  BMIs.push(row.BMI);
  DiabetesPedigreeFunctions.push(DiabetesPedigreeFunction);
  Ages.push(Age);
  Outcomes.push(Outcome);
  let trace1={x:Glucoses, y: Outcomes, text:"Glucose Levels", name:"Glucose",type:"bar"};
  let data1=[trace1];
  let layout={title:"Glucose Levels Vs. Outcome",barmode:"group",margin:{l:50,r:50,b:200,t:50,pad:4}};
  Plotly.newplot("plot",data1,layout);

  let trace2={x:BloodPressures, y: Outcomes, text:"BloodPressure Levels", name:"BloodPressure", type:"bar"};
  let data2=[trace2];
  let layout={title:"BloodPressure Levels Vs. Outcome",barmode:"group",margin:{l:50,r:50,b:200,t:50,pad:4}};
  Plotly.newplot("plot",data2,layout);

  let trace3={x:Ages, y: Outcomes, text:"Ages", name:"Age",type:"bar"};
  let data3=[trace3];
  let layout={title:"Ages Vs. Outcome",barmode:"group",margin:{l:50,r:50,b:200,t:50,pad:4}};
  Plotly.newplot("plot",data3,layout);

  let trace4={x:BMIs, y: Outcomes, text:"BMIs", name:"BMI",type:"bar"};
  let data4=[trace4];
  let layout={title:"BMIs Vs. Outcome",barmode:"group",margin:{l:50,r:50,b:200,t:50,pad:4}};
  Plotly.newplot("plot",data4,layout);

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function EndUser() {
	
  const [md1, setMd1] = useState([0.0, 0.0, 0.0]);
  const [md1r, setMd1r] = useState([0.0, 0.0, 0.0]);
  const [md1w, setMd1w] = useState([0.0, 0.0, 0.0]);

  const [md2, setMd2] = useState([0.0, 0.0, 0.0]);
  const [md2r, setMd2r] = useState([0.0, 0.0, 0.0]);
  const [md2w, setMd2w] = useState([0.0, 0.0, 0.0]);

  const [md3, setMd3] = useState([0.0, 0.0, 0.0]);
  const [md3r, setMd3r] = useState([0.0, 0.0, 0.0]);
  const [md3w, setMd3w] = useState([0.0, 0.0, 0.0]);

  const [md4, setMd4] = useState([0.0, 0.0, 0.0]);
const [md4r, setMd4r] = useState([0.0, 0.0, 0.0]);
const [md4w, setMd4w] = useState([0.0, 0.0, 0.0]);

const [md5, setMd5] = useState([0.0, 0.0, 0.0]);
const [md5r, setMd5r] = useState([0.0, 0.0, 0.0]);
const [md5w, setMd5w] = useState([0.0, 0.0, 0.0]);

const [md6, setMd6] = useState([0.0, 0.0, 0.0]);
const [md6r, setMd6r] = useState([0.0, 0.0, 0.0]);
const [md6w, setMd6w] = useState([0.0, 0.0, 0.0]);

const [md7, setMd7] = useState([0.0, 0.0, 0.0]);
const [md7r, setMd7r] = useState([0.0, 0.0, 0.0]);
const [md7w, setMd7w] = useState([0.0, 0.0, 0.0]);

const [md8, setMd8] = useState([0.0, 0.0, 0.0]);
const [md8r, setMd8r] = useState([0.0, 0.0, 0.0]);
const [md8w, setMd8w] = useState([0.0, 0.0, 0.0]);

const [md9, setMd9] = useState([0.0, 0.0, 0.0]);
const [md9r, setMd9r] = useState([0.0, 0.0, 0.0]);
const [md9w, setMd9w] = useState([0.0, 0.0, 0.0]);

const [md10, setMd10] = useState([0.0, 0.0, 0.0]);
const [md10r, setMd10r] = useState([0.0, 0.0, 0.0]);
const [md10w, setMd10w] = useState([0.0, 0.0, 0.0]);

const [md11, setMd11] = useState([0.0, 0.0, 0.0]);
const [md11r, setMd11r] = useState([0.0, 0.0, 0.0]);
const [md11w, setMd11w] = useState([0.0, 0.0, 0.0]);

const [md12, setMd12] = useState([0.0, 0.0, 0.0]);
const [md12r, setMd12r] = useState([0.0, 0.0, 0.0]);
const [md12w, setMd12w] = useState([0.0, 0.0, 0.0]);

const [md13, setMd13] = useState([0.0, 0.0, 0.0]);
const [md13r, setMd13r] = useState([0.0, 0.0, 0.0]);
const [md13w, setMd13w] = useState([0.0, 0.0, 0.0]);

const [md14, setMd14] = useState([0.0, 0.0, 0.0]);
const [md14r, setMd14r] = useState([0.0, 0.0, 0.0]);
const [md14w, setMd14w] = useState([0.0, 0.0, 0.0]);

const [md15, setMd15] = useState([0.0, 0.0, 0.0]);
const [md15r, setMd15r] = useState([0.0, 0.0, 0.0]);
const [md15w, setMd15w] = useState([0.0, 0.0, 0.0]);

const [md16, setMd16] = useState([0.0, 0.0, 0.0]);
const [md16r, setMd16r] = useState([0.0, 0.0, 0.0]);
const [md16w, setMd16w] = useState([0.0, 0.0, 0.0]);

const [md17, setMd17] = useState([0.0, 0.0, 0.0]);
const [md17r, setMd17r] = useState([0.0, 0.0, 0.0]);
const [md17w, setMd17w] = useState([0.0, 0.0, 0.0]);

const [md18, setMd18] = useState([0.0, 0.0, 0.0]);
const [md18r, setMd18r] = useState([0.0, 0.0, 0.0]);
const [md18w, setMd18w] = useState([0.0, 0.0, 0.0]);

const [md19, setMd19] = useState([0.0, 0.0, 0.0]);
const [md19r, setMd19r] = useState([0.0, 0.0, 0.0]);
const [md19w, setMd19w] = useState([0.0, 0.0, 0.0]);

const [md20, setMd20] = useState([0.0, 0.0, 0.0]);
const [md20r, setMd20r] = useState([0.0, 0.0, 0.0]);
const [md20w, setMd20w] = useState([0.0, 0.0, 0.0]);

const [md21, setMd21] = useState([0.0, 0.0, 0.0]);
const [md21r, setMd21r] = useState([0.0, 0.0, 0.0]);
const [md21w, setMd21w] = useState([0.0, 0.0, 0.0]);


const [md22, setMd22] = useState([0.0, 0.0, 0.0]);
const [md22r, setMd22r] = useState([0.0, 0.0, 0.0]);
const [md22w, setMd22w] = useState([0.0, 0.0, 0.0]);


const [md23, setMd23] = useState([0.0, 0.0, 0.0]);
const [md23r, setMd23r] = useState([0.0, 0.0, 0.0]);
const [md23w, setMd23w] = useState([0.0, 0.0, 0.0]);


const [md24, setMd24] = useState([0.0, 0.0, 0.0]);
const [md24r, setMd24r] = useState([0.0, 0.0, 0.0]);
const [md24w, setMd24w] = useState([0.0, 0.0, 0.0]);


const [md25, setMd25] = useState([0.0, 0.0, 0.0]);
const [md25r, setMd25r] = useState([0.0, 0.0, 0.0]);
const [md25w, setMd25w] = useState([0.0, 0.0, 0.0]);


const [md26, setMd26] = useState([0.0, 0.0, 0.0]);
const [md26r, setMd26r] = useState([0.0, 0.0, 0.0]);
const [md26w, setMd26w] = useState([0.0, 0.0, 0.0]);


const [md27, setMd27] = useState([0.0, 0.0, 0.0]);
const [md27r, setMd27r] = useState([0.0, 0.0, 0.0]);
const [md27w, setMd27w] = useState([0.0, 0.0, 0.0]);


const [md28, setMd28] = useState([0.0, 0.0, 0.0]);
const [md28r, setMd28r] = useState([0.0, 0.0, 0.0]);
const [md28w, setMd28w] = useState([0.0, 0.0, 0.0]);


const [md29, setMd29] = useState([0.0, 0.0, 0.0]);
const [md29r, setMd29r] = useState([0.0, 0.0, 0.0]);
const [md29w, setMd29w] = useState([0.0, 0.0, 0.0]);


const [md30, setMd30] = useState([0.0, 0.0, 0.0]);
const [md30r, setMd30r] = useState([0.0, 0.0, 0.0]);
const [md30w, setMd30w] = useState([0.0, 0.0, 0.0]);


const [md31, setMd31] = useState([0.0, 0.0, 0.0]);
const [md31r, setMd31r] = useState([0.0, 0.0, 0.0]);
const [md31w, setMd31w] = useState([0.0, 0.0, 0.0]);


const [md32, setMd32] = useState([0.0, 0.0, 0.0]);
const [md32r, setMd32r] = useState([0.0, 0.0, 0.0]);
const [md32w, setMd32w] = useState([0.0, 0.0, 0.0]);


const [md33, setMd33] = useState([0.0, 0.0, 0.0]);
const [md33r, setMd33r] = useState([0.0, 0.0, 0.0]);
const [md33w, setMd33w] = useState([0.0, 0.0, 0.0]);


const [md34, setMd34] = useState([0.0, 0.0, 0.0]);
const [md34r, setMd34r] = useState([0.0, 0.0, 0.0]);
const [md34w, setMd34w] = useState([0.0, 0.0, 0.0]);


const [md35, setMd35] = useState([0.0, 0.0, 0.0]);
const [md35r, setMd35r] = useState([0.0, 0.0, 0.0]);
const [md35w, setMd35w] = useState([0.0, 0.0, 0.0]);


const [md36, setMd36] = useState([0.0, 0.0, 0.0]);
const [md36r, setMd36r] = useState([0.0, 0.0, 0.0]);
const [md36w, setMd36w] = useState([0.0, 0.0, 0.0]);


const [md37, setMd37] = useState([0.0, 0.0, 0.0]);
const [md37r, setMd37r] = useState([0.0, 0.0, 0.0]);
const [md37w, setMd37w] = useState([0.0, 0.0, 0.0]);


const [md38, setMd38] = useState([0.0, 0.0, 0.0]);
const [md38r, setMd38r] = useState([0.0, 0.0, 0.0]);
const [md38w, setMd38w] = useState([0.0, 0.0, 0.0]);


const [md39, setMd39] = useState([0.0, 0.0, 0.0]);
const [md39r, setMd39r] = useState([0.0, 0.0, 0.0]);
const [md39w, setMd39w] = useState([0.0, 0.0, 0.0]);


const [md40, setMd40] = useState([0.0, 0.0, 0.0]);
const [md40r, setMd40r] = useState([0.0, 0.0, 0.0]);
const [md40w, setMd40w] = useState([0.0, 0.0, 0.0]);


const [md41, setMd41] = useState([0.0, 0.0, 0.0]);
const [md41r, setMd41r] = useState([0.0, 0.0, 0.0]);
const [md41w, setMd41w] = useState([0.0, 0.0, 0.0]);


const [md42, setMd42] = useState([0.0, 0.0, 0.0]);
const [md42r, setMd42r] = useState([0.0, 0.0, 0.0]);
const [md42w, setMd42w] = useState([0.0, 0.0, 0.0]);


const [md43, setMd43] = useState([0.0, 0.0, 0.0]);
const [md43r, setMd43r] = useState([0.0, 0.0, 0.0]);
const [md43w, setMd43w] = useState([0.0, 0.0, 0.0]);


const [md44, setMd44] = useState([0.0, 0.0, 0.0]);
const [md44r, setMd44r] = useState([0.0, 0.0, 0.0]);
const [md44w, setMd44w] = useState([0.0, 0.0, 0.0]);


const [md45, setMd45] = useState([0.0, 0.0, 0.0]);
const [md45r, setMd45r] = useState([0.0, 0.0, 0.0]);
const [md45w, setMd45w] = useState([0.0, 0.0, 0.0]);


const [md46, setMd46] = useState([0.0, 0.0, 0.0]);
const [md46r, setMd46r] = useState([0.0, 0.0, 0.0]);
const [md46w, setMd46w] = useState([0.0, 0.0, 0.0]);


const [md47, setMd47] = useState([0.0, 0.0, 0.0]);
const [md47r, setMd47r] = useState([0.0, 0.0, 0.0]);
const [md47w, setMd47w] = useState([0.0, 0.0, 0.0]);


// finding new max

const Features = [Math.max(md1[0],Math.max(md2[0],Math.max(md3[0],Math.max(md4[0],Math.max(md5[0],Math.max(md6[0],Math.max(md7[0],Math.max(md8[0],Math.max(md9[0],Math.max(md10[0],Math.max(md11[0],Math.max(md12[0],Math.max(md13[0],Math.max(md14[0],Math.max(md15[0],Math.max(md16[0],Math.max(md17[0],Math.max(md18[0],Math.max(md19[0],Math.max(md20[0],Math.max(md21[0],Math.max(md22[0],md23[0])))))))))))))))))))))) ,Math.max(md1[1],Math.max(md2[1],Math.max(md3[1],Math.max(md4[1],Math.max(md5[1],Math.max(md6[1],Math.max(md7[1],Math.max(md8[1],Math.max(md9[1],Math.max(md10[1],Math.max(md11[1],Math.max(md12[1],Math.max(md13[1],Math.max(md14[1],Math.max(md15[1],Math.max(md16[1],Math.max(md17[1],Math.max(md18[1],Math.max(md19[1],Math.max(md20[1],Math.max(md21[1],Math.max(md22[1],md23[1])))))))))))))))))))))) , Math.max(md1[2],Math.max(md2[2],Math.max(md3[2],Math.max(md4[2],Math.max(md5[2],Math.max(md6[2],Math.max(md7[2],Math.max(md8[2],Math.max(md9[2],Math.max(md10[2],Math.max(md11[2],Math.max(md12[2],Math.max(md13[2],Math.max(md14[2],Math.max(md15[2],Math.max(md16[2],Math.max(md17[2],Math.max(md18[2],Math.max(md19[2],Math.max(md20[2],Math.max(md21[2],Math.max(md22[2],md23[2]))))))))))))))))))))))];

const Time_taken = [Math.max(md24[0],md25[0]) , Math.max(md24[1],md25[1]) , Math.max(md24[2],md25[2])];

const Learn_ability = [Math.max(md26[0],Math.max(md27[0],Math.max(md28[0],md29[0]))), Math.max(md26[1],Math.max(md27[1],Math.max(md28[1],md29[1]))), Math.max(md26[2],Math.max(md27[2],Math.max(md28[2],md29[2])))];

const Accuracynew = [Math.max(md30[0],Math.max(md31[0],Math.max(md32[0],md33[0]))), Math.max(md30[1],Math.max(md31[1],Math.max(md32[1],md33[1]))), Math.max(md30[2],Math.max(md31[2],Math.max(md32[2],md33[2])))];

const Securitynew = [Math.max(md34[0],Math.max(md35[0],Math.max(md36[0],md37[0]))), Math.max(md34[1],Math.max(md35[1],Math.max(md36[1],md37[1]))), Math.max(md34[2],Math.max(md35[2],Math.max(md36[2],md37[2])))];

const Feedback = [Math.max(md38[0],Math.max(md39[0],Math.max(md40[0] ,Math.max(md41[0], md42[0]) ))) , Math.max(md38[1],Math.max(md39[1],Math.max(md40[1] ,Math.max(md41[1], md42[1]) ))) , Math.max(md38[2],Math.max(md39[2],Math.max(md40[2] ,Math.max(md41[2], md42[2]) )))];


// defining new variables

const [FeaturesFW , setFeaturesFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeSuitabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
    setFeaturesFW(selectedValue);
};

const [Learn_abilityFW , setLearn_abilityFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeInteroperabilityFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setLearn_abilityFW(selectedValue);
};  
	  

const [AccuracyFW , setAccuracyFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeFunctionality_ComplianceFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setAccuracyFW(selectedValue);
}; 

const [Time_takenFW , setTime_takenFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeCustomization_newFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setTime_takenFW(selectedValue);
};

const [SecurityFW , setSecurityFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeTime_BehaviorFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setSecurityFW(selectedValue);
};


const [FeedbackFW , setFeedbackFW] = useState([0.0 ,0.0 ,0.0 ]);
const handleSelectChangeResource_BehaviorFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setFeedbackFW(selectedValue);
};
// till above we have updated


// now we will find the fuzzy rate enduser view  // we have do multilication inside it
const FeaturesFR  = [FeaturesFW[0]*Features[0],FeaturesFW[1]*Features[1],FeaturesFW[2]*Features[2]];
const Time_TakenFR  = [Time_taken[0]*Time_takenFW[0],Time_taken[1]*Time_takenFW[1],Time_taken[2]*Time_takenFW[2]];
const Learn_abilityFR = [Learn_abilityFW[0]*Learn_ability[0],Learn_abilityFW[1]*Learn_ability[1],Learn_abilityFW[2]*Learn_ability[2]];
const AccuracyFR  = [AccuracyFW[0]*Accuracynew[0],AccuracyFW[1]*Accuracynew[1],AccuracyFW[2]*Accuracynew[2]];
const SecurityFR = [SecurityFW[0]*Securitynew[0],SecurityFW[1]*Securitynew[1],SecurityFW[2]*Securitynew[2]];
const FeedbackFR = [FeedbackFW[0]*Feedback[0],FeedbackFW[1]*Feedback[1],FeedbackFW[2]*Feedback[2]];

// now we will find max 

const max1 =  Math.max(FeaturesFR[0],Math.max(Time_TakenFR[0],Math.max(Learn_abilityFR[0],Math.max(AccuracyFR[0],Math.max(SecurityFR[0],FeedbackFR[0])))));
const max2 =  Math.max(FeaturesFR[1],Math.max(Time_TakenFR[1],Math.max(Learn_abilityFR[1],Math.max(AccuracyFR[1],Math.max(SecurityFR[1],FeedbackFR[1])))));
const max3 =  Math.max(FeaturesFR[2],Math.max(Time_TakenFR[2],Math.max(Learn_abilityFR[2],Math.max(AccuracyFR[2],Math.max(SecurityFR[2],FeedbackFR[2])))));

const a = max1;
const b = max2;
const c = max3;

const p = ((a*a + b*b + a*b)/3) - (a*(a+b))/2;
const q = (c*(c+b))/2 - ((c*c + b*b + c*b)/3);
const r = (b-a)/2;
const s = (c-b)/2;

const integrated = (p+q)/(r+s);

  const setters = [setMd1r, setMd1w,setMd2r, setMd2w,setMd3r, setMd3w,setMd4r, setMd4w,setMd5r, setMd5w,
    setMd6r, setMd6w, setMd7r, setMd7w,setMd8r, setMd8w,setMd9r, setMd9w,setMd10r, setMd10w,setMd11r, setMd11w,
    setMd12r, setMd12w,setMd13r, setMd13w,setMd14r, setMd14w,setMd15r, setMd15w,setMd16r, setMd16w,
    setMd17r, setMd17w,setMd18r, setMd18w,setMd19r, setMd19w,setMd20r, setMd20w,setMd21r, setMd21w,
    setMd22r, setMd22w,setMd23r, setMd23w,setMd24r, setMd24w,setMd25r, setMd25w,setMd26r, setMd26w,
    setMd27r, setMd27w,setMd28r, setMd28w,setMd29r, setMd29w,setMd30r, setMd30w,setMd31r, setMd31w,
    setMd32r, setMd32w,setMd33r, setMd33w,setMd34r, setMd34w,setMd35r, setMd35w,setMd36r, setMd36w,
    setMd37r, setMd37w,setMd38r, setMd38w,setMd39r, setMd39w,setMd40r, setMd40w,setMd41r, setMd41w,
    setMd42r, setMd42w,setMd43r, setMd43w,setMd44r, setMd44w,setMd45r, setMd45w,setMd46r, setMd46w,setMd47r, setMd47w];


  const handleMdChange = (type, index, event) => {
    const selectedValue = event.target.value.split(",").map(parseFloat);
    if(type=='w'){
      setters[index](selectedValue); 
      return;
    }
    setters[index-1](selectedValue); 
  };

  
  useEffect(() => {
    handleChangemd1();
  }, [md1r, md1w]);

  useEffect(() => {
    handleChangemd2();
  }, [md2r, md2w]);

  useEffect(() => {
    handleChangemd3();
  }, [md3r, md3w]);

  useEffect(() => {
    handleChangemd4();
  }, [md4r, md4w]);
  
  useEffect(() => {
    handleChangemd5();
  }, [md5r, md5w]);

  useEffect(() => {
    handleChangemd6();
  }, [md6r, md6w]);

  useEffect(() => {
    handleChangemd7();
  }, [md7r, md7w]);

  useEffect(() => {
    handleChangemd8();
  }, [md8r, md8w]);

  useEffect(() => {
    handleChangemd9();
  }, [md9r, md9w]);

  useEffect(() => {
    handleChangemd10();
  }, [md10r, md10w]);

  useEffect(() => {
    handleChangemd11();
    }, [md11r, md11w]);
    
    useEffect(() => {
    handleChangemd12();
    }, [md12r, md12w]);
    
    useEffect(() => {
    handleChangemd13();
    }, [md13r, md13w]);
    
    useEffect(() => {
    handleChangemd14();
    }, [md14r, md14w]);
    
    useEffect(() => {
    handleChangemd15();
    }, [md15r, md15w]);
    
    useEffect(() => {
    handleChangemd16();
    }, [md16r, md16w]);
    
    useEffect(() => {
    handleChangemd17();
    }, [md17r, md17w]);
    
    useEffect(() => {
    handleChangemd18();
    }, [md18r, md18w]);
    
    useEffect(() => {
    handleChangemd19();
    }, [md19r, md19w]);
    
    useEffect(() => {
    handleChangemd20();
    }, [md20r, md20w]);
    
    useEffect(() => {
    handleChangemd21();
    }, [md21r, md21w]);
    
    useEffect(() => {
    handleChangemd22();
    }, [md22r, md22w]);
    
    useEffect(() => {
    handleChangemd23();
    }, [md23r, md23w]);
    
    useEffect(() => {
    handleChangemd24();
    }, [md24r, md24w]);
    
    useEffect(() => {
    handleChangemd25();
    }, [md25r, md25w]);
    
    useEffect(() => {
    handleChangemd26();
    }, [md26r, md26w]);
    
    useEffect(() => {
    handleChangemd27();
    }, [md27r, md27w]);
    
    useEffect(() => {
    handleChangemd28();
    }, [md28r, md28w]);
    
    useEffect(() => {
    handleChangemd29();
    }, [md29r, md29w]);
    
    useEffect(() => {
    handleChangemd30();
    }, [md30r, md30w]);
    
    useEffect(() => {
    handleChangemd31();
    }, [md31r, md31w]);
    
    useEffect(() => {
    handleChangemd32();
    }, [md32r, md32w]);
    
    useEffect(() => {
    handleChangemd33();
    }, [md33r, md33w]);
    
    useEffect(() => {
    handleChangemd34();
    }, [md34r, md34w]);
    
    useEffect(() => {
    handleChangemd35();
    }, [md35r, md35w]);
    
    useEffect(() => {
    handleChangemd36();
    }, [md36r, md36w]);
    
    useEffect(() => {
    handleChangemd37();
    }, [md37r, md37w]);
    
    useEffect(() => {
    handleChangemd38();
    }, [md38r, md38w]);
    
    useEffect(() => {
    handleChangemd39();
    }, [md39r, md39w]);
    
    useEffect(() => {
    handleChangemd40();
    }, [md40r, md40w]);
    
    useEffect(() => {
    handleChangemd41();
    }, [md41r, md41w]);
    
    useEffect(() => {
    handleChangemd42();
    }, [md42r, md42w]);
    
    useEffect(() => {
    handleChangemd43();
    }, [md43r, md43w]);
    
    useEffect(() => {
    handleChangemd44();
    }, [md44r, md44w]);
    
    useEffect(() => {
    handleChangemd45();
    }, [md45r, md45w]);
    
    useEffect(() => {
    handleChangemd46();
    }, [md46r, md46w]);
    
    useEffect(() => {
    handleChangemd47();
    }, [md47r, md47w]);
  

  const handleChangemd1 = () => {
    setMd1(prevMd1 => [
      md1r[0] * md1w[0],
      md1r[1] * md1w[1],
      md1r[2] * md1w[2]
    ]);
  };
  const handleChangemd2 = () => {
    setMd2(prevMd2 => [
      md2r[0] * md2w[0],
      md2r[1] * md2w[1],
      md2r[2] * md2w[2]
    ]);
  };
  
  const handleChangemd3 = () => {
    setMd3(prevMd3 => [
      md3r[0] * md3w[0],
      md3r[1] * md3w[1],
      md3r[2] * md3w[2]
    ]);
  };

  const handleChangemd4 = () => {
    setMd4(prevMd4 => [
      md4r[0] * md4w[0],
      md4r[1] * md4w[1],
      md4r[2] * md4w[2]
    ]);
  };

  const handleChangemd5 = () => {
    setMd5(prevMd5 => [
      md5r[0] * md5w[0],
      md5r[1] * md5w[1],
      md5r[2] * md5w[2]
    ]);
  };

  const handleChangemd6 = () => {
    setMd6(prevMd6 => [
      md6r[0] * md6w[0],
      md6r[1] * md6w[1],
      md6r[2] * md6w[2]
    ]);
  };

  const handleChangemd7 = () => {
    setMd7(prevMd7 => [
      md7r[0] * md7w[0],
      md7r[1] * md7w[1],
      md7r[2] * md7w[2]
    ]);
  };

  const handleChangemd8 = () => {
    setMd8(prevMd8 => [
      md8r[0] * md8w[0],
      md8r[1] * md8w[1],
      md8r[2] * md8w[2]
    ]);
  };

  const handleChangemd9 = () => {
    setMd9(prevMd9 => [
      md9r[0] * md9w[0],
      md9r[1] * md9w[1],
      md9r[2] * md9w[2]
    ]);
  };

  const handleChangemd10 = () => {
    setMd10(prevMd10 => [
      md10r[0] * md10w[0],
      md10r[1] * md10w[1],
      md10r[2] * md10w[2]
    ]);
  };
  
  const handleChangemd11 = () => {
    setMd11(prevMd11 => [
    md11r[0] * md11w[0],
    md11r[1] * md11w[1],
    md11r[2] * md11w[2]
    ]);
   };
   const handleChangemd12 = () => {
    setMd12(prevMd12 => [
    md12r[0] * md12w[0],
    md12r[1] * md12w[1],
    md12r[2] * md12w[2]
    ]);
   };
   const handleChangemd13 = () => {
    setMd13(prevMd13 => [
    md13r[0] * md13w[0],
    md13r[1] * md13w[1],
    md13r[2] * md13w[2]
    ]);
   };
   const handleChangemd14 = () => {
    setMd14(prevMd14 => [
    md14r[0] * md14w[0],
    md14r[1] * md14w[1],
    md14r[2] * md14w[2]
    ]);
   };
   const handleChangemd15 = () => {
    setMd15(prevMd15 => [
    md15r[0] * md15w[0],
    md15r[1] * md15w[1],
    md15r[2] * md15w[2]
    ]);
   };
   const handleChangemd16 = () => {
    setMd16(prevMd16 => [
    md16r[0] * md16w[0],
    md16r[1] * md16w[1],
    md16r[2] * md16w[2]
    ]);
   };
   const handleChangemd17 = () => {
    setMd17(prevMd17 => [
    md17r[0] * md17w[0],
    md17r[1] * md17w[1],
    md17r[2] * md17w[2]
    ]);
   };
   const handleChangemd18 = () => {
    setMd18(prevMd18 => [
    md18r[0] * md18w[0],
    md18r[1] * md18w[1],
    md18r[2] * md18w[2]
    ]);
   };
   const handleChangemd19 = () => {
    setMd19(prevMd19 => [
    md19r[0] * md19w[0],
    md19r[1] * md19w[1],
    md19r[2] * md19w[2]
    ]);
   };
   const handleChangemd20 = () => {
    setMd20(prevMd20 => [
    md20r[0] * md20w[0],
    md20r[1] * md20w[1],
    md20r[2] * md20w[2]
    ]);
   };
   const handleChangemd21 = () => {
    setMd21(prevMd21 => [
    md21r[0] * md21w[0],
    md21r[1] * md21w[1],
    md21r[2] * md21w[2]
    ]);
   };
   const handleChangemd22 = () => {
    setMd22(prevMd22 => [
    md22r[0] * md22w[0],
    md22r[1] * md22w[1],
    md22r[2] * md22w[2]
    ]);
   };
   const handleChangemd23 = () => {
    setMd23(prevMd23 => [
    md23r[0] * md23w[0],
    md23r[1] * md23w[1],
    md23r[2] * md23w[2]
    ]);
   };
   const handleChangemd24 = () => {
    setMd24(prevMd24 => [
    md24r[0] * md24w[0],
    md24r[1] * md24w[1],
    md24r[2] * md24w[2]
    ]);
   };
   const handleChangemd25 = () => {
    setMd25(prevMd25 => [
    md25r[0] * md25w[0],
    md25r[1] * md25w[1],
    md25r[2] * md25w[2]
    ]);
   };
   const handleChangemd26 = () => {
    setMd26(prevMd26 => [
    md26r[0] * md26w[0],
    md26r[1] * md26w[1],
    md26r[2] * md26w[2]
    ]);
   };
   const handleChangemd27 = () => {
    setMd27(prevMd27 => [
    md27r[0] * md27w[0],
    md27r[1] * md27w[1],
    md27r[2] * md27w[2]
    ]);
   };
   const handleChangemd28 = () => {
    setMd28(prevMd28 => [
    md28r[0] * md28w[0],
    md28r[1] * md28w[1],
    md28r[2] * md28w[2]
    ]);
   };
   const handleChangemd29 = () => {
    setMd29(prevMd29 => [
    md29r[0] * md29w[0],
    md29r[1] * md29w[1],
    md29r[2] * md29w[2]
    ]);
   };
   const handleChangemd30 = () => {
    setMd30(prevMd30 => [
    md30r[0] * md30w[0],
    md30r[1] * md30w[1],
    md30r[2] * md30w[2]
    ]);
   };
   const handleChangemd31 = () => {
    setMd31(prevMd31 => [
    md31r[0] * md31w[0],
    md31r[1] * md31w[1],
    md31r[2] * md31w[2]
    ]);
   };
   const handleChangemd32 = () => {
    setMd32(prevMd32 => [
    md32r[0] * md32w[0],
    md32r[1] * md32w[1],
    md32r[2] * md32w[2]
    ]);
   };
   const handleChangemd33 = () => {
    setMd33(prevMd33 => [
    md33r[0] * md33w[0],
    md33r[1] * md33w[1],
    md33r[2] * md33w[2]
    ]);
   };
   const handleChangemd34 = () => {
    setMd34(prevMd34 => [
    md34r[0] * md34w[0],
    md34r[1] * md34w[1],
    md34r[2] * md34w[2]
    ]);
   };
   const handleChangemd35 = () => {
    setMd35(prevMd35 => [
    md35r[0] * md35w[0],
    md35r[1] * md35w[1],
    md35r[2] * md35w[2]
    ]);
   };
   const handleChangemd36 = () => {
    setMd36(prevMd36 => [
    md36r[0] * md36w[0],
    md36r[1] * md36w[1],
    md36r[2] * md36w[2]
    ]);
   };
   const handleChangemd37 = () => {
    setMd37(prevMd37 => [
    md37r[0] * md37w[0],
    md37r[1] * md37w[1],
    md37r[2] * md37w[2]
    ]);
   };
   const handleChangemd38 = () => {
    setMd38(prevMd38 => [
    md38r[0] * md38w[0],
    md38r[1] * md38w[1],
    md38r[2] * md38w[2]
    ]);
   };
   const handleChangemd39 = () => {
    setMd39(prevMd39 => [
    md39r[0] * md39w[0],
    md39r[1] * md39w[1],
    md39r[2] * md39w[2]
    ]);
   };
   const handleChangemd40 = () => {
    setMd40(prevMd40 => [
    md40r[0] * md40w[0],
    md40r[1] * md40w[1],
    md40r[2] * md40w[2]
    ]);
   };
   const handleChangemd41 = () => {
    setMd41(prevMd41 => [
    md41r[0] * md41w[0],
    md41r[1] * md41w[1],
    md41r[2] * md41w[2]
    ]);
   };
   const handleChangemd42 = () => {
    setMd42(prevMd42 => [
    md42r[0] * md42w[0],
    md42r[1] * md42w[1],
    md42r[2] * md42w[2]
    ]);
   };
   const handleChangemd43 = () => {
    setMd43(prevMd43 => [
    md43r[0] * md43w[0],
    md43r[1] * md43w[1],
    md43r[2] * md43w[2]
    ]);
   };
   const handleChangemd44 = () => {
    setMd44(prevMd44 => [
    md44r[0] * md44w[0],
    md44r[1] * md44w[1],
    md44r[2] * md44w[2]
    ]);
   };
   const handleChangemd45 = () => {
    setMd45(prevMd45 => [
    md45r[0] * md45w[0],
    md45r[1] * md45w[1],
    md45r[2] * md45w[2]
    ]);
   };
   const handleChangemd46 = () => {
    setMd46(prevMd46 => [
    md46r[0] * md46w[0],
    md46r[1] * md46w[1],
    md46r[2] * md46w[2]
    ]);
   };
   const handleChangemd47 = () => {
    setMd47(prevMd47 => [
    md47r[0] * md47w[0],
    md47r[1] * md47w[1],
    md47r[2] * md47w[2]
    ]);
   };

  return (
    <div className="container">
	<h1>End User View</h1>

<div className="factor">

	<div className="factorTitle">Features</div>

	<div className="Question">MED1</div>
	<label for="md1" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 1, event)}>
		<option >Select Option</option>
		<option value="0.39,0.58,0.78">Very High (0.39 0.58 0.78) </option>
	</select>
	<label htmlFor="md1w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 1, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED1</div>
		<div>{md1[0]}</div>
		<div>{md1[1]}</div>
		<div>{md1[2]}</div>
	</div>
</div>


<div className="factor">
	<div className="Question">MED2</div>
	<label for="md2" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 3, event)}>
		<option >Select Option</option>
		<option value="0.4,0.59,0.78">Very High (0.4 0.59 0.78) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 3, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED2</div>
		<div>{md2[0]}</div>
		<div>{md2[1]}</div>
		<div>{md2[2]}</div>
	</div>

	<div className="Question">MED3</div>
	<label for="md3" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 5, event)}>
		<option >Select Option</option>
		<option value="0.33,0.52,0.71">High (0.33 0.52 0.71)</option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 5, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED3</div>
		<div>{md3[0]}</div>
		<div>{md3[1]}</div>
		<div>{md3[2]}</div>
	</div>
</div>


<div className="factor">

	<div className="Question">MED4</div>
	<label for="md4" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 7, event)}>
		<option >Select Option</option>
		<option value="0.39,0.58,0.78">Very High (0.39 0.58 0.78) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 7, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED4</div>
		<div>{md4[0]}</div>
		<div>{md4[1]}</div>
		<div>{md4[2]}</div>
	</div>


	<div className="Question">MED5</div>
	<label for="md5" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 9, event)}>
		<option >Select Option</option>
		<option value="0.41,0.6,0.79">High (0.41 0.6 0.79) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 9, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED5</div>
		<div>{md5[0]}</div>
		<div>{md5[1]}</div>
		<div>{md5[2]}</div>
	</div>


	<div className="Question">MED6</div>
	<label for="md6" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 11, event)}>
		<option >Select Option</option>
		<option value="0.41,0.6,0.79">High (0.41 0.6 0.79) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 11, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED6</div>
		<div>{md6[0]}</div>
		<div>{md6[1]}</div>
		<div>{md6[2]}</div>
	</div>
</div>


<div className="factor">
	
	<div className="Question">MED7</div>
	<label for="md7" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 13, event)}>
		<option >Select Option</option>
		<option value="0.45,0.65,0.83">Very High (0.45 0.65 0.83) </option>
	</select>
	<label htmlFor="md7w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 13, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED7</div>
		<div>{md7[0]}</div>
		<div>{md7[1]}</div>
		<div>{md7[2]}</div>
	</div>
</div>

<hr>
</hr>

<div className="factor">

	<div className="Question">MED8</div>
	<label for="md8" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 15, event)}>
		<option >Select Option</option>
		<option value="0.45,0.65,0.83">High (0.45 0.65 0.83) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 15, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED8</div>
		<div>{md8[0]}</div>
		<div>{md8[1]}</div>
		<div>{md8[2]}</div>
	</div>


	<div className="Question">MED9</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 17, event)}>
		<option >Select Option</option>
		<option value="0.46,0.66,0.83">Very High (0.46 0.66 0.83) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 17, event)}>
		<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED9</div>
		<div>{md9[0]}</div>
		<div>{md9[1]}</div>
		<div>{md9[2]}</div>
	</div>
</div>


<div className="factor">

  <div className="Question">MED10</div>
  <label for="md10" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 19, event)}>
    <option >Select Option</option>
    <option value="0.49,0.69,0.86">Very High (0.49 0.69 0.86) </option>
  </select>
  <label htmlFor="md2w" className="label">
  Fuzzy Weight :{" "}
  </label>
  <select required onChange={(event) =>
    handleMdChange('w', 19, event)}>
    <option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
  </select>
  <div className="question">
    <div>MED10</div>
    <div>{md10[0]}</div>
    <div>{md10[1]}</div>
    <div>{md10[2]}</div>
  </div>


  <div className="Question">MED11</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 21, event)}>
    <option >Select Option</option>
    <option value="0.49,0.69,0.86">Very High (0.49 0.69 0.86) </option>
  </select>
  <label htmlFor="md2w" className="label">
  Fuzzy Weight :{" "}
  </label>
  <select required onChange={(event) =>
    handleMdChange('w', 21, event)}>
    <option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
  </select>
  <div className="question">
    <div>MED11</div>
    <div>{md11[0]}</div>
    <div>{md11[1]}</div>
    <div>{md11[2]}</div>
  </div>

  <div className="Question">MED12</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 23, event)}>
    <option >Select Option</option>
    <option value="0.48,0.68,0.86">Very High (0.48 0.68 0.86) </option>
  </select>
  <label htmlFor="md2w" className="label">
  Fuzzy Weight :{" "}
  </label>
  <select required onChange={(event) =>
    handleMdChange('w', 23, event)}>
    <option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
  </select>
  <div className="question">
    <div>MED12</div>
    <div>{md12[0]}</div>
    <div>{md12[1]}</div>
    <div>{md12[2]}</div>
  </div>


  <div className="Question">MED13</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 25, event)}>
    <option >Select Option</option>
    <option value="0.49,0.69,0.86">Very High (0.49 0.69 0.86) </option>
  </select>
  <label htmlFor="md2w" className="label">
  Fuzzy Weight :{" "}
  </label>
  <select required onChange={(event) =>
    handleMdChange('w', 25, event)}>
    <option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
  </select>
  <div className="question">
    <div>MED13</div>
    <div>{md13[0]}</div>
    <div>{md13[1]}</div>
    <div>{md13[2]}</div>
  </div>
</div>

<div className="factor">

<div className="Question">MED14</div>
<label for="md9" className="label"> Fuzzy Rate : </label>
<select required onChange={(event) =>
	handleMdChange('r', 27, event)}>
	<option >Select Option</option>
	<option value="0.49,0.69,0.86">High (0.49 0.69 0.86) </option>
</select>
<label htmlFor="md2w" className="label">
Fuzzy Weight :{" "}
</label>
<select required onChange={(event) =>
	handleMdChange('w', 27, event)}>
	<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
</select>
<div className="question">
	<div>MED14</div>
	<div>{md14[0]}</div>
	<div>{md14[1]}</div>
	<div>{md14[2]}</div>
</div>

<div className="Question">MED15</div>
<label for="md9" className="label"> Fuzzy Rate : </label>
<select required onChange={(event) =>
	handleMdChange('r', 29, event)}>
	<option >Select Option</option>
	<option value="0.48,0.68,0.86">Very High (0.48 0.68 0.86) </option>
</select>
<label htmlFor="md2w" className="label">
Fuzzy Weight :{" "}
</label>
<select required onChange={(event) =>
	handleMdChange('w', 29, event)}>
	<option >Select Option</option>
	<option value="0.0,0.0,0.25">Very Low</option>
	<option value="0.0,0.25,0.50">Low</option>
	<option value="0.25,0.50,0.75">Medium</option>
	<option value="0.50,0.75,1.0">High</option>
	<option value="0.75,1.0,1.0">Very High</option>
</select>
<div className="question">
	<div>MED15</div>
	<div>{md15[0]}</div>
	<div>{md15[1]}</div>
	<div>{md15[2]}</div>
</div>
</div>

<div className="factor">
	
	<div className="Question">MED16</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 31, event)}>
		<option >Select Option</option>
		<option value="0.44,0.63,0.82">High (0.44 0.63 0.82) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 31, event)}>
		<option >Select Option</option>
		<option value="0.0,0.0,0.25">Very Low</option>
		<option value="0.0,0.25,0.50">Low</option>
		<option value="0.25,0.50,0.75">Medium</option>
		<option value="0.50,0.75,1.0">High</option>
		<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED16</div>
		<div>{md16[0]}</div>
		<div>{md16[1]}</div>
		<div>{md16[2]}</div>
	</div>


	<div className="Question">MED17</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 33, event)}>
		<option >Select Option</option>
		<option value="0.48,0.68,0.86">High (0.48 0.68 0.86) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 33, event)}>
		<option >Select Option</option>
		<option value="0.0,0.0,0.25">Very Low</option>
		<option value="0.0,0.25,0.50">Low</option>
		<option value="0.25,0.50,0.75">Medium</option>
		<option value="0.50,0.75,1.0">High</option>
		<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED17</div>
		<div>{md17[0]}</div>
		<div>{md17[1]}</div>
		<div>{md17[2]}</div>
	</div>


	<div className="Question">MED18</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 35, event)}>
		<option >Select Option</option>
		<option value="0.46,0.66,0.84">Very High (0.46 0.66 0.84) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 35, event)}>
		<option >Select Option</option>
		<option value="0.0,0.0,0.25">Very Low</option>
		<option value="0.0,0.25,0.50">Low</option>
		<option value="0.25,0.50,0.75">Medium</option>
		<option value="0.50,0.75,1.0">High</option>
		<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED18</div>
		<div>{md18[0]}</div>
		<div>{md18[1]}</div>
		<div>{md18[2]}</div>
	</div>


	<div className="Question">MED19</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 37, event)}>
		<option >Select Option</option>
		<option value="0.4,0.6,0.79">High (0.4 0.6 0.79) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 37, event)}>
		<option >Select Option</option>
		<option value="0.0,0.0,0.25">Very Low</option>
		<option value="0.0,0.25,0.50">Low</option>
		<option value="0.25,0.50,0.75">Medium</option>
		<option value="0.50,0.75,1.0">High</option>
		<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED19</div>
		<div>{md19[0]}</div>
		<div>{md19[1]}</div>
		<div>{md19[2]}</div>
	</div>


	<div className="Question">MED20</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 39, event)}>
		<option >Select Option</option>
		<option value="0.42,0.62,0.8">Very High (0.42 0.62 0.8) </option>
	</select>
	<label htmlFor="md2w" className="label">
	Fuzzy Weight :{" "}
	</label>
	<select required onChange={(event) =>
		handleMdChange('w', 39, event)}>
		<option >Select Option</option>
		<option value="0.0,0.0,0.25">Very Low</option>
		<option value="0.0,0.25,0.50">Low</option>
		<option value="0.25,0.50,0.75">Medium</option>
		<option value="0.50,0.75,1.0">High</option>
		<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="question">
		<div>MED20</div>
		<div>{md20[0]}</div>
		<div>{md20[1]}</div>
		<div>{md20[2]}</div>
	</div>
	</div>

	<div className="factor">
		<div className="Question">MED21</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 41, event)}>
			<option >Select Option</option>
			<option value="0.44,0.63,0.81">Very High (0.44 0.63 0.81) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 41, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED21</div>
			<div>{md21[0]}</div>
			<div>{md21[1]}</div>
			<div>{md21[2]}</div>
		</div>
	</div>

	<div className="factor">
	
		{/* md 22 23 24*/}
    <div className="Question">MED22</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 43, event)}>
			<option >Select Option</option>
			<option value="0.39,0.58,0.77">High (0.39 0.58 0.77) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 43, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED22</div>
			<div>{md22[0]}</div>
			<div>{md22[1]}</div>
			<div>{md22[2]}</div>
		</div>

    <div className="Question">MED23</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 45, event)}>
			<option >Select Option</option>
			<option value="0.42,0.62,0.8">High (0.42 0.62 0.8) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 45, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED23</div>
			<div>{md23[0]}</div>
			<div>{md23[1]}</div>
			<div>{md23[2]}</div>
		</div>

		<div className="factorTitle">Time taken</div>
    <div className="Question">MED24</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 47, event)}>
			<option >Select Option</option>
			<option value="0.26,0.45,0.65">Very High (0.26 0.45 0.65) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 47, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED24</div>
			<div>{md24[0]}</div>
			<div>{md24[1]}</div>
			<div>{md24[2]}</div>
		</div>

	</div>

	<div className="factor">
		{/* md 25 26 */}
    <div className="Question">MED25</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 49, event)}>
			<option >Select Option</option>
			<option value="0.3,0.49,0.69">High (0.3 0.49 0.69) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 49, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED25</div>
			<div>{md25[0]}</div>
			<div>{md25[1]}</div>
			<div>{md25[2]}</div>
		</div>

		<div className="factorTitle">Learn-ability</div>
    <div className="Question">MED26</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 51, event)}>
			<option >Select Option</option>
			<option value="0.39,0.59,0.78">High (0.39 0.59 0.78) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 51, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED26</div>
			<div>{md26[0]}</div>
			<div>{md26[1]}</div>
			<div>{md26[2]}</div>
		</div>

	</div>

	<div className="factor">
		{/* 27 28 29 */}

    <div className="Question">MED27</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 53, event)}>
			<option >Select Option</option>
			<option value="0.4,0.6,0.79">High (0.4 0.6 0.79) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 53, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED27</div>
			<div>{md27[0]}</div>
			<div>{md27[1]}</div>
			<div>{md27[2]}</div>
		</div>

    <div className="Question">MED28</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 55, event)}>
			<option >Select Option</option>
			<option value="0.35,0.55,0.75">Very High (0.35 0.55 0.75) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 55, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED28</div>
			<div>{md28[0]}</div>
			<div>{md28[1]}</div>
			<div>{md28[2]}</div>
		</div>

    <div className="Question">MED29</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 57, event)}>
			<option >Select Option</option>
			<option value="0.36,0.56,0.75">High (0.36 0.56 0.75) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 57, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED29</div>
			<div>{md29[0]}</div>
			<div>{md29[1]}</div>
			<div>{md29[2]}</div>
		</div>

	</div>

	<div class="factor">
		<div class="factorTitle">Accuracy</div>
		{/* 30 */}
		
    <div className="Question">MED30</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 59, event)}>
			<option >Select Option</option>
			<option value="0.41,0.61,0.8">High (0.41 0.61 0.8) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 59, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED30</div>
			<div>{md30[0]}</div>
			<div>{md30[1]}</div>
			<div>{md30[2]}</div>
		</div>
	</div>

	<div class="factor">
		
		{/* 31 */}

    <div className="Question">MED31</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 61, event)}>
			<option >Select Option</option>
			<option value="0.43,0.63,0.81">High (0.43 0.63 0.81) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 61, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED31</div>
			<div>{md31[0]}</div>
			<div>{md31[1]}</div>
			<div>{md31[2]}</div>
		</div>

	</div>

	<div class="factor">
		
		{/* 32 */}

    <div className="Question">MED32</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 63, event)}>
			<option >Select Option</option>
			<option value="0.41,0.61,0.79">High (0.41 0.61 0.79) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 63, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED32</div>
			<div>{md32[0]}</div>
			<div>{md32[1]}</div>
			<div>{md32[2]}</div>
		</div>
    
	</div>

	<div class="factor">
		
		{/* 33 */}

    <div className="Question">MED33</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 65, event)}>
			<option >Select Option</option>
			<option value="0.47,0.67,0.85">High (0.47 0.67 0.85) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 65, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED33</div>
			<div>{md33[0]}</div>
			<div>{md33[1]}</div>
			<div>{md33[2]}</div>
		</div>
    
	</div>

	<div class="factor">
		<div class="factorTitle">Security</div>
		{/* 34 */}

		<div className="Question">MED34</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 67, event)}>
			<option >Select Option</option>
			<option value="0.44,0.63,0.82">High (0.44 0.63 0.82) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 67, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED34</div>
			<div>{md34[0]}</div>
			<div>{md34[1]}</div>
			<div>{md34[2]}</div>
		</div>
	</div>

	<div class="factor">
		{/* 35 */}

		<div className="Question">MED35</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 69, event)}>
			<option >Select Option</option>
			<option value="0.46,0.66,0.85">Very High (0.46 0.66 0.85) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 69, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED35</div>
			<div>{md35[0]}</div>
			<div>{md35[1]}</div>
			<div>{md35[2]}</div>
		</div>

		<div className="Question">MED36</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 71, event)}>
			<option >Select Option</option>
			<option value="0.45,0.65,0.83">Very High (0.45 0.65 0.83) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 71, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED36</div>
			<div>{md36[0]}</div>
			<div>{md36[1]}</div>
			<div>{md36[2]}</div>
		</div>

		<div className="Question">MED37</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 73, event)}>
			<option >Select Option</option>
			<option value="0.48,0.68,0.85">High (0.48 0.68 0.85) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 73, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED37</div>
			<div>{md37[0]}</div>
			<div>{md37[1]}</div>
			<div>{md37[2]}</div>
		</div>

		<div className="factorTitle">Feedback</div>
		<div className="Question">MED38</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 75, event)}>
			<option >Select Option</option>
			<option value="0.41,0.61,0.8">Very High (0.41 0.61 0.8) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 75, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED38</div>
			<div>{md38[0]}</div>
			<div>{md38[1]}</div>
			<div>{md38[2]}</div>
		</div>

		<div className="Question">MED39</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 77, event)}>
			<option >Select Option</option>
			<option value="0.41,0.61,0.8">High (0.41 0.61 0.8) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 77, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED39</div>
			<div>{md39[0]}</div>
			<div>{md39[1]}</div>
			<div>{md39[2]}</div>
		</div>

	</div>

     {/* 36-71 37-73 38-75 39-77 */}
	<div class="factor">

		{/* 40 41 */}

		<div className="Question">MED40</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 79, event)}>
			<option >Select Option</option>
			<option value="0.43,0.63,0.82">High (0.43 0.63 0.82) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 79, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED40</div>
			<div>{md40[0]}</div>
			<div>{md40[1]}</div>
			<div>{md40[2]}</div>
		</div>

		<div className="Question">MED41</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 81, event)}>
			<option >Select Option</option>
			<option value="0.48,0.68,0.86">Very High (0.48 0.68 0.86) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 81, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED41</div>
			<div>{md41[0]}</div>
			<div>{md41[1]}</div>
			<div>{md41[2]}</div>
		</div>
	</div>

	<div class="factor">
		{/* 42 */}

		<div className="Question">MED42</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 83, event)}>
			<option >Select Option</option>
			<option value="0.42,0.62,0.8">High (0.42 0.62 0.8) </option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 83, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MED42</div>
			<div>{md42[0]}</div>
			<div>{md42[1]}</div>
			<div>{md42[2]}</div>
		</div>
	</div>



	
	<div className="qualityfactorcontainer">
		
		<div>

			<div className="headingofqf"> Fuzzy Rate Quality Factor</div>

			<div className="qf">FEATURES</div>
			<div className="qfvalues">
				<div>{Features[0]} </div>
				<div>{Features[1]}</div>
				<div>{Features[2]}</div>
			</div>

			<div className="qf">TIME TAKEN</div>
			<div className="qfvalues">
				<div>{Time_taken[0]} </div>
				<div>{Time_taken[1]}</div>
				<div>{Time_taken[2]}</div>
			</div>

			<div className="qf">LEARN-ABILITY</div>

			<div className="qfvalues">
				<div>{Learn_ability[0]} </div>
				<div>{Learn_ability[1]}</div>
				<div>{Learn_ability[2]}</div>
			</div>



			<div className="qf">ACCURECY</div>

			<div className="qfvalues">
				<div>{Accuracynew [0]} </div>
				<div>{Accuracynew[1]}</div>
				<div>{Accuracynew[2]}</div>
			</div>
			<div className="qf">SECURITY</div>

			<div className="qfvalues">
				<div>{Securitynew[0]} </div>
				<div>{Securitynew[1]}</div>
				<div>{Securitynew[2]}</div>
			</div>

			<div className="qf">FEEDBACK</div>

			<div className="qfvalues">
				<div>{Feedback[0]} </div>
				<div>{Feedback[1]}</div>
				<div>{Feedback[2]}</div>
			</div>

		</div>	

		<div>

		<div className="headingofqf">Fuzzy Weight Quality Factor</div>


<div className="qf">FEATURES Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeSuitabilityFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{FeaturesFW[0]}</div>
		<div>{FeaturesFW[1]}</div>
		<div>{FeaturesFW[2]}</div>
	</div>
</div>

<div className="qf">TIME TAKEN Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeCustomization_newFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{Time_takenFW[0]}</div>
		<div>{Time_takenFW[1]}</div>
		<div>{Time_takenFW[2]}</div>
	</div>
</div>	

<div className="qf">LEARN-ABILITY Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeInteroperabilityFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{Learn_abilityFW[0]}</div>
		<div>{Learn_abilityFW[1]}</div>
		<div>{Learn_abilityFW[2]}</div>
	</div>
</div >

<div className="qf">ACCURECY Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeFunctionality_ComplianceFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{AccuracyFW[0]}</div>
		<div>{AccuracyFW[1]}</div>
		<div>{AccuracyFW[2]}</div>
	</div>
</div>

<div className="qf">SECURITY Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeTime_BehaviorFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{SecurityFW[0]}</div>
		<div>{SecurityFW[1]}</div>
		<div>{SecurityFW[2]}</div>
	</div>
</div>

<div className="qf">FEEDBACK Quality Factor</div>
<div>
	<select required onChange={handleSelectChangeResource_BehaviorFW}  >
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
	</select>
	<div className="qfvalues1">
		<div>{FeedbackFW[0]}</div>
		<div>{FeedbackFW[1]}</div>
		<div>{FeedbackFW[2]}</div>
	</div>
</div>


		</div>	


		<div className="headingofqf" >
			<div>Fuzzy Rate (END USER View) </div>

			<div className="qf">FEATURES</div>
			<div className="devview">
				<div>{FeaturesFR[0]} </div>
				<div>{FeaturesFR[1]}</div>
				<div>{FeaturesFR[2]}</div>
			</div>

			<div className="qf">TIME TAKEN</div>
			<div className="devview">
				<div>{Time_TakenFR[0]} </div>
				<div>{Time_TakenFR[1]}</div>
				<div>{Time_TakenFR[2]}</div>
			</div>

			<div className="qf">LEARN-ABILITY</div>
			<div className="devview">
				<div>{Learn_abilityFR[0]} </div>
				<div>{Learn_abilityFR[1]}</div>
				<div>{Learn_abilityFR[2]}</div>
			</div>

			<div className="qf">ACCURECY</div>
			<div className="devview">
				<div>{AccuracyFR[0]} </div>
				<div>{AccuracyFR[1]}</div>
				<div>{AccuracyFR[2]}</div>
			</div>

			<div className="qf">SECURITY</div>
			<div className="devview">
				<div>{SecurityFR[0]} </div>
				<div>{SecurityFR[1]}</div>
				<div>{SecurityFR[2]}</div>
			</div>

			<div className="qf">FEEDBACK</div>
			<div className="devview">
				<div>{FeedbackFR[0]} </div>
				<div>{FeedbackFR[1]}</div>
				<div>{FeedbackFR[2]}</div>
			</div>
			
		</div>

	</div>

	<div className="headingofqf"  >Final END USER Values</div>
	<div className="devview">
	<div>{max1}</div>
	<div>{max2}</div>
	<div>{max3}</div>
	</div>
 
    <div className="headingofqf">Integrated final value</div>
	<div className="finalinte">{integrated}</div>
	
	<div className="navbar">
		<Link to={'/'} >Dev view</Link>
		<Link to={'/tester'}>Tester view</Link>
		<Link to={'/enduser'} className="active">Enduser view</Link>
		<Link to={'/fuzzycalc'}>Fuzzy Calc</Link>
	</div>

</div>
  );
}

export default EndUser;

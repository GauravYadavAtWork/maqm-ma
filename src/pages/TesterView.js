import { useState,useEffect } from "react";

function Tester() {

	
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


const Suitability = [md1[0] , md1[1] , md1[2]];

const Accuracy = [Math.max(md2[0],md3[0]) , Math.max(md2[1],md3[1]) , Math.max(md2[2],md3[2])];

const Interoperability = [Math.max(md4[0],Math.max(md5[0],md6[0])) , Math.max(md4[1],Math.max(md5[1],md6[1])) , Math.max(md4[2],Math.max(md5[2],md6[2]))];

const Functionality_Compliance = [md7[0], md7[1] , md7[2]];

const Security = [md8[0] , md8[1] , md8[2]];

const Customization_new = [Math.max(md9[0],Math.max(md10[0],Math.max(md11[0] , md12[0]))) , Math.max(md9[1],Math.max(md10[1],Math.max(md11[1] , md12[1]))) , Math.max(md9[2],Math.max(md10[2],Math.max(md11[2] , md12[2])))];

const Time_Behavior = [md13[0] , md13[1] , md13[2]];

const Resource_Behavior = [Math.max(md14[0],md15[0]) , Math.max(md14[1],md15[1]) , Math.max(md14[2],md15[2])];

const Efficiency_Compliance = [md16[0] , md16[1] , md16[2]];

const scalability = [Math.max(md17[0],Math.max(md18[0],md19[0])) , Math.max(md17[1],Math.max(md18[1],md19[1])) , Math.max(md17[2],Math.max(md18[2],md19[2]))];

const Performance = [Math.max(md20[0],Math.max(md21[0],Math.max(md22[0] , md23[0]))) , Math.max(md20[1],Math.max(md21[1],Math.max(md22[1] , md23[1]))) , Math.max(md20[2],Math.max(md21[2],Math.max(md22[2] , md23[2])))];

const Data_availability_new = [md24[0] , md24[1] , md24[2]];

const Replace_ability = [md25[0] , md25[1] , md25[2]];

const Adaptability = [md26[0] , md26[1] , md26[2]];

const Install_ability = [md27[0] , md27[1] , md27[2]];

const Co_existence = [md28[0] , md28[1] , md28[2]];

const Portability_compliance = [md29[0] , md29[1] , md29[2]];

const Analyzability = [md30[0] , md30[1] , md30[2]];

const Stability = [md31[0] , md31[1] , md31[2]];

const Maintainability = [md32[0] , md32[1] , md32[2]];

const Fault_Tolerance = [md33[0] , md33[1] , md33[2]];

const Recoverability = [md34[0] , md34[1] , md34[2]];

const Reliability_Compliance = [md35[0] , md35[1] , md35[2]];

const Changeability = [Math.max(md36[0],md37[0]) , Math.max(md36[1],md37[1]) , Math.max(md36[2],md37[2])];

const Testability = [Math.max(md38[0],Math.max(md39[0],Math.max(md40[0] , md41[0]))) , Math.max(md38[1],Math.max(md39[1],Math.max(md40[1] , md41[1]))) , Math.max(md38[2],Math.max(md39[2],Math.max(md40[2] , md41[2])))];


const Maturity = [Math.max(md42[0],md43[0]) , Math.max(md42[1],md43[1]) , Math.max(md42[2],md43[2])];






// defining new variables

const [SuitabilityFW , setSuitabilityFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeSuitabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
    setSuitabilityFW(selectedValue);
};

const [AccuracyFW , setAccuracyFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeAccuracyFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	 setAccuracyFW(selectedValue);
	}; 
	
const [InteroperabilityFW , setInteroperabilityFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeInteroperabilityFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setInteroperabilityFW(selectedValue);
};  
	  
const [Functionality_ComplianceFW , setFunctionality_ComplianceFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeFunctionality_ComplianceFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setFunctionality_ComplianceFW(selectedValue);
}; 
		
const [SecurityFW , setSecurityFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeSecurityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
	setSecurityFW(selectedValue);
};

const [Customization_newFW , setCustomization_newFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeCustomization_newFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setCustomization_newFW(selectedValue);
};

const [Time_BehaviorFW , setTime_BehaviorFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeTime_BehaviorFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setTime_BehaviorFW(selectedValue);
};

const [Resource_BehaviorFW , setResource_BehaviorFW] = useState([0.0 ,0.0 ,0.0 ]);

const handleSelectChangeResource_BehaviorFW = (event) => {
	const selectedValue = event.target.value.split(',').map(parseFloat);
	setResource_BehaviorFW(selectedValue);
};

const [Efficiency_ComplianceFW , setEfficiency_ComplianceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeEfficiency_ComplianceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setEfficiency_ComplianceFW(selectedValue);
};

const [scalabilityFW , setscalabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangescalabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setscalabilityFW(selectedValue);
};

const [PerformanceFW , setPerformanceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangePerformanceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setPerformanceFW(selectedValue);
};

const [Data_availability_newFW , setData_availability_newFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeData_availability_newFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setData_availability_newFW(selectedValue);
};

const [Replace_abilityFW , setReplace_abilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeReplace_abilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setReplace_abilityFW(selectedValue);
};

const [AdaptabilityFW , setAdaptabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeAdaptabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setAdaptabilityFW(selectedValue);
};

const [Install_abilityFW , setInstall_abilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeInstall_abilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setInstall_abilityFW(selectedValue);
};

const [Co_existenceFW , setCo_existenceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeCo_existenceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setCo_existenceFW(selectedValue);
};

const [Portability_complianceFW , setPortability_complianceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangePortability_complianceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setPortability_complianceFW(selectedValue);
};

const [AnalyzabilityFW , setAnalyzabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeAnalyzabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setAnalyzabilityFW(selectedValue);
};

const [StabilityFW , setStabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeStabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setStabilityFW(selectedValue);
};

const [MaintainabilityFW , setMaintainabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeMaintainabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setMaintainabilityFW(selectedValue);
};

const [Fault_ToleranceFW , setFault_ToleranceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeFault_ToleranceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setFault_ToleranceFW(selectedValue);
};

const [RecoverabilityFW , setRecoverabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeRecoverabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setRecoverabilityFW(selectedValue);
};

const [Reliability_ComplianceFW , setReliability_ComplianceFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeReliability_ComplianceFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setReliability_ComplianceFW(selectedValue);
};

const [ChangeabilityFW , setChangeabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeChangeabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setChangeabilityFW(selectedValue);
};

const [TestabilityFW , setTestabilityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeTestabilityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setTestabilityFW(selectedValue);
};

const [MaturityFW , setMaturityFW] = useState([0.0 ,0.0 ,0.0 ]);
    const handleSelectChangeMaturityFW = (event) => {
    const selectedValue = event.target.value.split(',').map(parseFloat);
setMaturityFW(selectedValue);
};


// dev view final variables

const SuitabilityDEV = [Suitability[0]*SuitabilityFW[0] , Suitability[1]*SuitabilityFW[1] , Suitability[2]*SuitabilityFW[2] ] ;
const AccuracyDEV = [Accuracy[0]*AccuracyFW[0] , Accuracy[1]*AccuracyFW[1] , Accuracy[2]*AccuracyFW[2] ] ;

const InteroperabilityDEV = [Interoperability[0]*InteroperabilityFW[0] , Interoperability[1]*InteroperabilityFW[1] , Interoperability[2]*InteroperabilityFW[2] ] ;

const Functionality_ComplianceDEV = [Functionality_Compliance[0]*Functionality_ComplianceFW[0] , Functionality_Compliance[1]*Functionality_ComplianceFW[1] , Functionality_Compliance[2]*Functionality_ComplianceFW[2] ] ;

const SecurityDEV = [Security[0]*SecurityFW[0] , Security[1]*SecurityFW[1] , Security[2]*SecurityFW[2] ] ;

const Customization_newDEV = [Customization_new[0]*Customization_newFW[0] , Customization_new[1]*Customization_newFW[1] , Customization_new[2]*Customization_newFW[2] ] ;

const Time_BehaviorDEV = [Time_Behavior[0]*Time_BehaviorFW[0] , Time_Behavior[1]*Time_BehaviorFW[1] , Time_Behavior[2]*Time_BehaviorFW[2] ] ;

const Resource_BehaviorDEV = [Accuracy[0]*Resource_BehaviorFW[0] , Resource_Behavior[1]*Resource_BehaviorFW[1] , Resource_Behavior[2]*Resource_BehaviorFW[2] ] ;

const Efficiency_ComplianceDEV = [Efficiency_Compliance[0]*Efficiency_ComplianceFW[0] , Efficiency_Compliance[1]*Efficiency_ComplianceFW[1] , Efficiency_Compliance[2]*Efficiency_ComplianceFW[2] ] ;

const scalabilityDEV = [scalability[0]*scalabilityFW[0] , scalability[1]*scalabilityFW[1] , scalability[2]*scalabilityFW[2] ] ;

const PerformanceDEV = [Performance[0]*PerformanceFW[0] , Performance[1]*PerformanceFW[1] , Performance[2]*PerformanceFW[2] ] ;

const Data_availability_newDEV = [Data_availability_new[0]*Data_availability_newFW[0] , Data_availability_new[1]*Data_availability_newFW[1] , Data_availability_new[2]*Data_availability_newFW[2] ] ;

const Replace_abilityDEV = [Replace_ability[0]*Replace_abilityFW[0] , Replace_ability[1]*Replace_abilityFW[1] , Replace_ability[2]*Replace_abilityFW[2] ] ;

const AdaptabilityDEV = [Adaptability[0]*AdaptabilityFW[0] , Adaptability[1]*AdaptabilityFW[1] , Adaptability[2]*AdaptabilityFW[2] ] ;

const Install_abilityDEV = [Install_ability[0]*Install_abilityFW[0] , Install_ability[1]*Install_abilityFW[1] , Install_ability[2]*Install_abilityFW[2] ] ;

const Co_existenceDEV = [Co_existence[0]*Co_existenceFW[0] , Co_existence[1]*Co_existenceFW[1] , Co_existence[2]*Co_existenceFW[2] ] ;

const Portability_complianceDEV = [Portability_compliance[0]*Portability_complianceFW[0] , Portability_compliance[1]*Portability_complianceFW[1] , Portability_compliance[2]*Portability_complianceFW[2] ] ;

const AnalyzabilityDEV = [Analyzability[0]*AnalyzabilityFW[0] , Analyzability[1]*AnalyzabilityFW[1] , Analyzability[2]*AnalyzabilityFW[2] ] ;

const StabilityDEV = [Stability[0]*StabilityFW[0] , Stability[1]*StabilityFW[1] , Stability[2]*StabilityFW[2] ] ;

const MaintainabilityDEV = [Maintainability[0]*MaintainabilityFW[0] , Maintainability[1]*MaintainabilityFW[1] , Maintainability[2]*MaintainabilityFW[2] ] ;

const Fault_ToleranceDEV = [Fault_Tolerance[0]*Fault_ToleranceFW[0] , Fault_Tolerance[1]*Fault_ToleranceFW[1] , Fault_Tolerance[2]*Fault_ToleranceFW[2] ] ;

const RecoverabilityDEV = [Recoverability[0]*RecoverabilityFW[0] , Recoverability[1]*RecoverabilityFW[1] , Recoverability[2]*RecoverabilityFW[2] ] ;

const Reliability_ComplianceDEV = [Reliability_Compliance[0]*Reliability_ComplianceFW[0] , Reliability_Compliance[1]*Reliability_ComplianceFW[1] , Reliability_Compliance[2]*Reliability_ComplianceFW[2] ] ;

const ChangeabilityDEV = [Changeability[0]*ChangeabilityFW[0] , Changeability[1]*ChangeabilityFW[1] , Changeability[2]*ChangeabilityFW[2] ] ;

const TestabilityDEV = [Testability[0]*TestabilityFW[0] , Testability[1]*TestabilityFW[1] , Testability[2]*TestabilityFW[2] ] ;

const MaturityDEV = [Maturity[0]*MaturityFW[0] , Maturity[1]*MaturityFW[1] , Maturity[2]*MaturityFW[2] ] ;



// Final MAX Values

const max1 = Math.max(SuitabilityDEV[0] , Math.max(InteroperabilityDEV[0] , Math.max(Functionality_ComplianceDEV[0] , Math.max(SecurityDEV[0] , Math.max(Customization_newDEV[0] , Math.max(Time_BehaviorDEV[0] , Math.max(Resource_BehaviorDEV[0] , Math.max(Efficiency_ComplianceDEV[0] , Math.max(scalabilityDEV[0] , Math.max(PerformanceDEV[0] , Math.max(Data_availability_newDEV[0], Math.max(Replace_abilityDEV[0] , Math.max(AdaptabilityDEV[0] , Math.max(Install_abilityDEV[0] , Math.max(Co_existenceDEV[0] , (Portability_complianceDEV[0] , Math.max(AnalyzabilityDEV[0] , Math.max(StabilityDEV[0] , Math.max(MaintainabilityDEV[0] , Math.max(Fault_ToleranceDEV[0] , Math.max(RecoverabilityDEV[0] , Reliability_ComplianceDEV[0] )))))))))))))))))))));

const max2 = Math.max(SuitabilityDEV[1] , Math.max(InteroperabilityDEV[1] , Math.max(Functionality_ComplianceDEV[1] , Math.max(SecurityDEV[1] , Math.max(Customization_newDEV[1] , Math.max(Time_BehaviorDEV[1] , Math.max(Resource_BehaviorDEV[1] , Math.max(Efficiency_ComplianceDEV[1] , Math.max(scalabilityDEV[1] , Math.max(PerformanceDEV[1] , Math.max(Data_availability_newDEV[1], Math.max(Replace_abilityDEV[1] , Math.max(AdaptabilityDEV[1] , Math.max(Install_abilityDEV[1] , Math.max(Co_existenceDEV[1] , (Portability_complianceDEV[1] , Math.max(AnalyzabilityDEV[1] , Math.max(StabilityDEV[1] , Math.max(MaintainabilityDEV[1] , Math.max(Fault_ToleranceDEV[1] , Math.max(RecoverabilityDEV[1] , Reliability_ComplianceDEV[1] )))))))))))))))))))));

const max3 = Math.max(SuitabilityDEV[2] , Math.max(InteroperabilityDEV[2] , Math.max(Functionality_ComplianceDEV[2] , Math.max(SecurityDEV[2] , Math.max(Customization_newDEV[2] , Math.max(Time_BehaviorDEV[2] , Math.max(Resource_BehaviorDEV[2] , Math.max(Efficiency_ComplianceDEV[2] , Math.max(scalabilityDEV[2] , Math.max(PerformanceDEV[2] , Math.max(Data_availability_newDEV[2], Math.max(Replace_abilityDEV[2] , Math.max(AdaptabilityDEV[2] , Math.max(Install_abilityDEV[2] , Math.max(Co_existenceDEV[2] , (Portability_complianceDEV[2] , Math.max(AnalyzabilityDEV[2] , Math.max(StabilityDEV[2] , Math.max(MaintainabilityDEV[2] , Math.max(Fault_ToleranceDEV[2] , Math.max(RecoverabilityDEV[2] , Reliability_ComplianceDEV[2] )))))))))))))))))))));

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
	<h1>Tester View</h1>
<div className="factor">
	<div className="factorTitle">Suitability</div>
	<div className="Question">MT1</div>
	<label for="md1" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 1, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT1</div>
		<div>{md1[0]}</div>
		<div>{md1[1]}</div>
		<div>{md1[2]}</div>
	</div>
</div>

<hr>
</hr>

<div className="factor">
	<div className="factorTitle">Accuracy</div>
	<div className="Question">MT2</div>
	<label for="md2" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 3, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT2</div>
		<div>{md2[0]}</div>
		<div>{md2[1]}</div>
		<div>{md2[2]}</div>
	</div>

	<div className="Question">MT3</div>
	<label for="md3" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 5, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT3</div>
		<div>{md3[0]}</div>
		<div>{md3[1]}</div>
		<div>{md3[2]}</div>
	</div>
</div>

<hr>
</hr>

<div className="factor">
	<div className="factorTitle">Interoperability</div>
	<div className="Question">MT4</div>
	<label for="md4" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 7, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT4</div>
		<div>{md4[0]}</div>
		<div>{md4[1]}</div>
		<div>{md4[2]}</div>
	</div>


	<div className="Question">MT5</div>
	<label for="md5" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 9, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT5</div>
		<div>{md5[0]}</div>
		<div>{md5[1]}</div>
		<div>{md5[2]}</div>
	</div>


	<div className="Question">MT6</div>
	<label for="md6" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 11, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT6</div>
		<div>{md6[0]}</div>
		<div>{md6[1]}</div>
		<div>{md6[2]}</div>
	</div>
</div>

<hr>
</hr>

<div className="factor">
	<div className="factorTitle">Functionality Compliance</div>
	<div className="Question">MT7</div>
	<label for="md7" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 13, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT7</div>
		<div>{md7[0]}</div>
		<div>{md7[1]}</div>
		<div>{md7[2]}</div>
	</div>
</div>

<hr>
</hr>

<div className="factor">
	<div className="factorTitle">Security</div>
	<div className="Question">MT8</div>
	<label for="md8" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 15, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT8</div>
		<div>{md8[0]}</div>
		<div>{md8[1]}</div>
		<div>{md8[2]}</div>
	</div>

<hr></hr>

	<div className="factorTitle">Customization-new</div>
	<div className="Question">MT9</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 17, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT9</div>
		<div>{md9[0]}</div>
		<div>{md9[1]}</div>
		<div>{md9[2]}</div>
	</div>
</div>


<div className="factor">

  <div className="Question">MT10</div>
  <label for="md10" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 19, event)}>
    <option >Select Option</option>
    <option value="0.0,0.1,0.3">Very Low</option>
    <option value="0.1,0.3,0.5">Low</option>
    <option value="0.3,0.5,0.7">Medium</option>
    <option value="0.5,0.7,0.9">High</option>
    <option value="0.7,0.9,1.0">Very High</option>
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
    <div>MT10</div>
    <div>{md10[0]}</div>
    <div>{md10[1]}</div>
    <div>{md10[2]}</div>
  </div>


  <div className="Question">MT11</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 21, event)}>
    <option >Select Option</option>
    <option value="0.0,0.1,0.3">Very Low</option>
    <option value="0.1,0.3,0.5">Low</option>
    <option value="0.3,0.5,0.7">Medium</option>
    <option value="0.5,0.7,0.9">High</option>
    <option value="0.7,0.9,1.0">Very High</option>
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
    <div>MT11</div>
    <div>{md11[0]}</div>
    <div>{md11[1]}</div>
    <div>{md11[2]}</div>
  </div>

  <div className="Question">MT12</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 23, event)}>
    <option >Select Option</option>
    <option value="0.0,0.1,0.3">Very Low</option>
    <option value="0.1,0.3,0.5">Low</option>
    <option value="0.3,0.5,0.7">Medium</option>
    <option value="0.5,0.7,0.9">High</option>
    <option value="0.7,0.9,1.0">Very High</option>
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
    <div>MT12</div>
    <div>{md12[0]}</div>
    <div>{md12[1]}</div>
    <div>{md12[2]}</div>
  </div>

<hr></hr>

<div className="factorTitle">Time Behavior</div>
  <div className="Question">MT13</div>
  <label for="md9" className="label"> Fuzzy Rate : </label>
  <select required onChange={(event) =>
    handleMdChange('r', 25, event)}>
    <option >Select Option</option>
    <option value="0.0,0.1,0.3">Very Low</option>
    <option value="0.1,0.3,0.5">Low</option>
    <option value="0.3,0.5,0.7">Medium</option>
    <option value="0.5,0.7,0.9">High</option>
    <option value="0.7,0.9,1.0">Very High</option>
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
    <div>MT13</div>
    <div>{md13[0]}</div>
    <div>{md13[1]}</div>
    <div>{md13[2]}</div>
  </div>
</div>

<hr></hr>

<div className="factor">
<div className="factorTitle">Resource Behavior</div>
<div className="Question">MT14</div>
<label for="md9" className="label"> Fuzzy Rate : </label>
<select required onChange={(event) =>
	handleMdChange('r', 27, event)}>
	<option >Select Option</option>
	<option value="0.0,0.1,0.3">Very Low</option>
	<option value="0.1,0.3,0.5">Low</option>
	<option value="0.3,0.5,0.7">Medium</option>
	<option value="0.5,0.7,0.9">High</option>
	<option value="0.7,0.9,1.0">Very High</option>
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
	<div>MT14</div>
	<div>{md14[0]}</div>
	<div>{md14[1]}</div>
	<div>{md14[2]}</div>
</div>

<div className="Question">MT15</div>
<label for="md9" className="label"> Fuzzy Rate : </label>
<select required onChange={(event) =>
	handleMdChange('r', 29, event)}>
	<option >Select Option</option>
	<option value="0.0,0.1,0.3">Very Low</option>
	<option value="0.1,0.3,0.5">Low</option>
	<option value="0.3,0.5,0.7">Medium</option>
	<option value="0.5,0.7,0.9">High</option>
	<option value="0.7,0.9,1.0">Very High</option>
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
	<div>MT15</div>
	<div>{md15[0]}</div>
	<div>{md15[1]}</div>
	<div>{md15[2]}</div>
</div>
</div>

<div className="factor">
	<div className="factorTitle">Efficiency Compliance</div>
	<div className="Question">MT16</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 31, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT16</div>
		<div>{md16[0]}</div>
		<div>{md16[1]}</div>
		<div>{md16[2]}</div>
	</div>

<hr></hr>

	<div className="factorTitle">scalability</div>
	<div className="Question">MT17</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 33, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT17</div>
		<div>{md17[0]}</div>
		<div>{md17[1]}</div>
		<div>{md17[2]}</div>
	</div>


	<div className="Question">MT18</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 35, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT18</div>
		<div>{md18[0]}</div>
		<div>{md18[1]}</div>
		<div>{md18[2]}</div>
	</div>


	<div className="Question">MT19</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 37, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT19</div>
		<div>{md19[0]}</div>
		<div>{md19[1]}</div>
		<div>{md19[2]}</div>
	</div>

<hr>
</hr>

	<div className="factorTitle">Performance</div>
	<div className="Question">MT20</div>
	<label for="md9" className="label"> Fuzzy Rate : </label>
	<select required onChange={(event) =>
		handleMdChange('r', 39, event)}>
		<option >Select Option</option>
		<option value="0.0,0.1,0.3">Very Low</option>
		<option value="0.1,0.3,0.5">Low</option>
		<option value="0.3,0.5,0.7">Medium</option>
		<option value="0.5,0.7,0.9">High</option>
		<option value="0.7,0.9,1.0">Very High</option>
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
		<div>MT20</div>
		<div>{md20[0]}</div>
		<div>{md20[1]}</div>
		<div>{md20[2]}</div>
	</div>
	</div>

	<div className="factor">
		
		<div className="Question">MT21</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 41, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT21</div>
			<div>{md21[0]}</div>
			<div>{md21[1]}</div>
			<div>{md21[2]}</div>
		</div>
	</div>

	<div className="factor">
		{/* md 22 23 24*/}
    <div className="Question">MT22</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 43, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT22</div>
			<div>{md22[0]}</div>
			<div>{md22[1]}</div>
			<div>{md22[2]}</div>
		</div>

    <div className="Question">MT23</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 45, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT23</div>
			<div>{md23[0]}</div>
			<div>{md23[1]}</div>
			<div>{md23[2]}</div>
		</div>

<hr></hr>
    
<div className="factorTitle">Data-availability-new</div>
    <div className="Question">MT24</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 47, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT24</div>
			<div>{md24[0]}</div>
			<div>{md24[1]}</div>
			<div>{md24[2]}</div>
		</div>

	</div>

<hr></hr>

	<div className="factor">
		<div className="factorTitle">Replace-ability</div>
		{/* md 25 26 */}
    <div className="Question">MT25</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 49, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT25</div>
			<div>{md25[0]}</div>
			<div>{md25[1]}</div>
			<div>{md25[2]}</div>
		</div>

<hr></hr> 

		<div className="factorTitle">Adaptability</div>
    <div className="Question">MT26</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 51, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT26</div>
			<div>{md26[0]}</div>
			<div>{md26[1]}</div>
			<div>{md26[2]}</div>
		</div>

	</div>

<hr></hr>

	<div className="factor">
		<div className="factorTitle">Install_ability</div>
		{/* 27 28 29 */}

    <div className="Question">MT27</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 53, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT27</div>
			<div>{md27[0]}</div>
			<div>{md27[1]}</div>
			<div>{md27[2]}</div>
		</div>

		<hr></hr>

		<div className="factorTitle">Co-Existence</div>
    <div className="Question">MT28</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 55, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT28</div>
			<div>{md28[0]}</div>
			<div>{md28[1]}</div>
			<div>{md28[2]}</div>
		</div>

<hr></hr>
<div className="factorTitle">Portability_compliance</div>
    <div className="Question">MT29</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 57, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT29</div>
			<div>{md29[0]}</div>
			<div>{md29[1]}</div>
			<div>{md29[2]}</div>
		</div>

	</div>
<hr></hr>
	<div class="factor">
		<div class="factorTitle">Analyzability</div>
		{/* 30 */}
		
    <div className="Question">MT30</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 59, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT30</div>
			<div>{md30[0]}</div>
			<div>{md30[1]}</div>
			<div>{md30[2]}</div>
		</div>
	</div>
<hr></hr>
	<div class="factor">
		<div class="factorTitle">Stability</div>
		{/* 31 */}

    <div className="Question">MT31</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 61, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT31</div>
			<div>{md31[0]}</div>
			<div>{md31[1]}</div>
			<div>{md31[2]}</div>
		</div>

	</div>
<hr></hr>
	<div class="factor">
		<div class="factorTitle">Maintainability_compliance</div>
		{/* 32 */}

    <div className="Question">MT32</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 63, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT32</div>
			<div>{md32[0]}</div>
			<div>{md32[1]}</div>
			<div>{md32[2]}</div>
		</div>
    
	</div>
	<hr></hr>

	<div class="factor">
		<div class="factorTitle">Fault_Tolerance</div>
		{/* 33 */}

    <div className="Question">MT33</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 65, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT33</div>
			<div>{md33[0]}</div>
			<div>{md33[1]}</div>
			<div>{md33[2]}</div>
		</div>
    
	</div>
	<hr></hr>

	<div class="factor">
		<div class="factorTitle">Recoverability</div>
		{/* 34 */}

		<div className="Question">MT34</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 67, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT34</div>
			<div>{md34[0]}</div>
			<div>{md34[1]}</div>
			<div>{md34[2]}</div>
		</div>
	</div>
<hr></hr>
	<div class="factor">
		<div class="factorTitle">Reliability_Compliance</div>
		{/* 35 */}

		<div className="Question">MT35</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 69, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT35</div>
			<div>{md35[0]}</div>
			<div>{md35[1]}</div>
			<div>{md35[2]}</div>
		</div>
<hr></hr>
<div class="factorTitle">Changeablity</div>
		<div className="Question">MT36</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 71, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT36</div>
			<div>{md36[0]}</div>
			<div>{md36[1]}</div>
			<div>{md36[2]}</div>
		</div>

		<div className="Question">MT37</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 73, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT37</div>
			<div>{md37[0]}</div>
			<div>{md37[1]}</div>
			<div>{md37[2]}</div>
		</div>
<hr></hr>

<div class="factorTitle">Testability</div>
		<div className="Question">MT38</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 75, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT38</div>
			<div>{md38[0]}</div>
			<div>{md38[1]}</div>
			<div>{md38[2]}</div>
		</div>

		<div className="Question">MT39</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 77, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT39</div>
			<div>{md38[0]}</div>
			<div>{md38[1]}</div>
			<div>{md38[2]}</div>
		</div>

	</div>

     {/* 36-71 37-73 38-75 39-77 */}
	<div class="factor">
		{/* 40 41 */}

		<div className="Question">MT40</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 79, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT40</div>
			<div>{md40[0]}</div>
			<div>{md40[1]}</div>
			<div>{md40[2]}</div>
		</div>

		<div className="Question">MT41</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 81, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT41</div>
			<div>{md41[0]}</div>
			<div>{md41[1]}</div>
			<div>{md41[2]}</div>
		</div>
	</div>
<hr></hr>
	<div class="factor">
		<div class="factorTitle">Maturity</div>
		{/* 42 */}

		<div className="Question">MT42</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 83, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
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
			<div>MT42</div>
			<div>{md42[0]}</div>
			<div>{md42[1]}</div>
			<div>{md42[2]}</div>
		</div>
	</div>

	<div class="factor">
		{/* 43 44 */}

		<div className="Question">MT43</div>
		<label for="md9" className="label"> Fuzzy Rate : </label>
		<select required onChange={(event) =>
			handleMdChange('r', 85, event)}>
			<option >Select Option</option>
			<option value="0.0,0.1,0.3">Very Low</option>
			<option value="0.1,0.3,0.5">Low</option>
			<option value="0.3,0.5,0.7">Medium</option>
			<option value="0.5,0.7,0.9">High</option>
			<option value="0.7,0.9,1.0">Very High</option>
		</select>
		<label htmlFor="md2w" className="label">
		Fuzzy Weight :{" "}
		</label>
		<select required onChange={(event) =>
			handleMdChange('w', 85, event)}>
			<option >Select Option</option>
			<option value="0.0,0.0,0.25">Very Low</option>
			<option value="0.0,0.25,0.50">Low</option>
			<option value="0.25,0.50,0.75">Medium</option>
			<option value="0.50,0.75,1.0">High</option>
			<option value="0.75,1.0,1.0">Very High</option>
		</select>
		<div className="question">
			<div>MT43</div>
			<div>{md43[0]}</div>
			<div>{md43[1]}</div>
			<div>{md43[2]}</div>
		</div>
	</div>

<hr></hr>

	

	
	<div className="qualityfactorcontainer">
		
		<div>

			<div className="headingofqf"> Fuzzy Rate Quality Factor</div>

			<div className="qf">Suitability</div>
			<div className="qfvalues">
				<div>{Suitability[0]} </div>
				<div>{Suitability[1]}</div>
				<div>{Suitability[2]}</div>
			</div>

			<div className="qf">Accuracy</div>
			<div className="qfvalues">
				<div>{Accuracy[0]} </div>
				<div>{Accuracy[1]}</div>
				<div>{Accuracy[2]}</div>
			</div>

			<div className="qf">Interoperability</div>

			<div className="qfvalues">
				<div>{Interoperability[0]} </div>
				<div>{Interoperability[1]}</div>
				<div>{Interoperability[2]}</div>
			</div>



			<div className="qf">Functionality Compliance</div>

			<div className="qfvalues">
				<div>{Functionality_Compliance [0]} </div>
				<div>{Functionality_Compliance[1]}</div>
				<div>{Functionality_Compliance[2]}</div>
			</div>
			<div className="qf">Security</div>

			<div className="qfvalues">
				<div>{Security[0]} </div>
				<div>{Security[1]}</div>
				<div>{Security[2]}</div>
			</div>

			<div className="qf">Customization-new</div>

			<div className="qfvalues">
				<div>{Customization_new[0]} </div>
				<div>{Customization_new[1]}</div>
				<div>{Customization_new[2]}</div>
			</div>

			<div className="qf">Time Behavior</div>

			<div className="qfvalues">
				<div>{Time_Behavior[0]} </div>
				<div>{Time_Behavior[1]}</div>
				<div>{Time_Behavior[2]}</div>
			</div>

			<div className="qf">Resource Behavior</div>

			<div className="qfvalues">
				<div>{Resource_Behavior[0]} </div>
				<div>{Resource_Behavior[1]}</div>
				<div>{Resource_Behavior[2]}</div>
			</div>

			<div className="qf">Efficiency Compliance</div>

			<div className="qfvalues">
				<div>{Efficiency_Compliance[0]} </div>
				<div>{Efficiency_Compliance[1]}</div>
				<div>{Efficiency_Compliance[2]}</div>
			</div>

			<div className="qf">Scalability</div>

			<div className="qfvalues">
				<div>{scalability[0]} </div>
				<div>{scalability[1]}</div>
				<div>{scalability[2]}</div>
			</div>

			<div className="qf">Performance</div>

			<div className="qfvalues">
				<div>{Performance[0]} </div>
				<div>{Performance[1]}</div>
				<div>{Performance[2]}</div>
			</div>

			<div className="qf">Data-availability-new</div>

			<div className="qfvalues">
				<div>{Data_availability_new[0]} </div>
				<div>{Data_availability_new[1]}</div>
				<div>{Data_availability_new[2]}</div>
			</div>

			<div className="qf">Replace-ability</div>

			<div className="qfvalues">
				<div>{Replace_ability[0]} </div>
				<div>{Replace_ability[1]}</div>
				<div>{Replace_ability[2]}</div>
			</div>

			<div className="qf">Adaptability</div>

			<div className="qfvalues">
				<div>{Adaptability[0]} </div>
				<div>{Adaptability[1]}</div>
				<div>{Adaptability[2]}</div>
			</div>

			<div className="qf">Install-ability</div>

			<div className="qfvalues">
				<div>{Install_ability[0]} </div>
				<div>{Install_ability[1]}</div>
				<div>{Install_ability[2]}</div>
			</div>

			<div className="qf">Co-existence</div>

			<div className="qfvalues">
				<div>{Co_existence[0]} </div>
				<div>{Co_existence[1]}</div>
				<div>{Co_existence[2]}</div>
			</div>

			<div className="qf">Portability Compliance</div>

			<div className="qfvalues">
				<div>{Portability_compliance[0]} </div>
				<div>{Portability_compliance[1]}</div>
				<div>{Portability_compliance[2]}</div>
			</div>

			<div className="qf">Analyzability</div>

			<div className="qfvalues">
				<div>{Analyzability[0]} </div>
				<div>{Analyzability[1]}</div>
				<div>{Analyzability[2]}</div>
			</div>

			<div className="qf">Stability</div>
			<div className="qfvalues">
				<div>{Stability[0]} </div>
				<div>{Stability[1]}</div>
				<div>{Stability[2]}</div>
			</div>

			<div className="qf">Maintainability</div>

			<div className="qfvalues">
				<div>{Maintainability[0]} </div>
				<div>{Maintainability[1]}</div>
				<div>{Maintainability[2]}</div>
			</div>

			<div className="qf">Fault Tolerance</div>

			<div className="qfvalues">
				<div>{Fault_Tolerance[0]} </div>
				<div>{Fault_Tolerance[1]}</div>
				<div>{Fault_Tolerance[2]}</div>
			</div>

			<div className="qf">Recoverability</div>

			<div className="qfvalues">
				<div>{Recoverability[0]} </div>
				<div>{Recoverability[1]}</div>
				<div>{Recoverability[2]}</div>
			</div>

			<div className="qf">Reliability Compliance</div>

			<div className="qfvalues">
				<div>{Reliability_Compliance[0]} </div>
				<div>{Reliability_Compliance[1]}</div>
				<div>{Reliability_Compliance[2]}</div>
			</div>


			<div className="qf">Changeability</div>
			<div className="qfvalues">
				<div>{Changeability[0]} </div>
				<div>{Changeability[1]}</div>
				<div>{Changeability[2]}</div>
			</div>


			<div className="qf">Testability</div>
			<div className="qfvalues">
				<div>{Testability[0]} </div>
				<div>{Testability[1]}</div>
				<div>{Testability[2]}</div>
			</div>

			<div className="qf">Maturity</div>
			<div className="qfvalues">
				<div>{Maturity[0]} </div>
				<div>{Maturity[1]}</div>
				<div>{Maturity[2]}</div>
			</div>



		</div>	

		<div>

			<div className="headingofqf">Fuzzy Weight Quality Factor</div>


			<div className="qf">Suitability Quality Factor</div>
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
					<div>{SuitabilityFW[0]}</div>
					<div>{SuitabilityFW[1]}</div>
					<div>{SuitabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Accuracy Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeAccuracyFW}  >
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

			<div className="qf">Interoperability Quality Factor</div>
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
					<div>{InteroperabilityFW[0]}</div>
					<div>{InteroperabilityFW[1]}</div>
					<div>{InteroperabilityFW[2]}</div>
				</div>
			</div >

			<div className="qf">Functionality_Compliance Quality Factor</div>
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
					<div>{Functionality_ComplianceFW[0]}</div>
					<div>{Functionality_ComplianceFW[1]}</div>
					<div>{Functionality_ComplianceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Security Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeSecurityFW}  >
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

			<div className="qf">Customization_new Quality Factor</div>
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
					<div>{Customization_newFW[0]}</div>
					<div>{Customization_newFW[1]}</div>
					<div>{Customization_newFW[2]}</div>
				</div>
			</div>

			<div className="qf">Time_Behavior Quality Factor</div>
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
					<div>{Time_BehaviorFW[0]}</div>
					<div>{Time_BehaviorFW[1]}</div>
					<div>{Time_BehaviorFW[2]}</div>
				</div>
			</div>	
			
			<div className="qf">Resource_Behavior Quality Factor</div>
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
					<div>{Resource_BehaviorFW[0]}</div>
					<div>{Resource_BehaviorFW[1]}</div>
					<div>{Resource_BehaviorFW[2]}</div>
				</div>
			</div>

			<div className="qf">Efficiency_Compliance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeEfficiency_ComplianceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Efficiency_ComplianceFW[0]}</div>
					<div>{Efficiency_ComplianceFW[1]}</div>
					<div>{Efficiency_ComplianceFW[2]}</div>
				</div>
			</div>

			<div className="qf">scalability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangescalabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{scalabilityFW[0]}</div>
					<div>{scalabilityFW[1]}</div>
					<div>{scalabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Performance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangePerformanceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{PerformanceFW[0]}</div>
					<div>{PerformanceFW[1]}</div>
					<div>{PerformanceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Data_availability_new Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeData_availability_newFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Data_availability_newFW[0]}</div>
					<div>{Data_availability_newFW[1]}</div>
					<div>{Data_availability_newFW[2]}</div>
				</div>
			</div>

			<div className="qf">Replace_ability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeReplace_abilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Replace_abilityFW[0]}</div>
					<div>{Replace_abilityFW[1]}</div>
					<div>{Replace_abilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Adaptability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeAdaptabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{AdaptabilityFW[0]}</div>
					<div>{AdaptabilityFW[1]}</div>
					<div>{AdaptabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Install_ability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeInstall_abilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Install_abilityFW[0]}</div>
					<div>{Install_abilityFW[1]}</div>
					<div>{Install_abilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Co_existence Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeCo_existenceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Co_existenceFW[0]}</div>
					<div>{Co_existenceFW[1]}</div>
					<div>{Co_existenceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Portability_compliance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangePortability_complianceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Portability_complianceFW[0]}</div>
					<div>{Portability_complianceFW[1]}</div>
					<div>{Portability_complianceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Analyzability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeAnalyzabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{AnalyzabilityFW[0]}</div>
					<div>{AnalyzabilityFW[1]}</div>
					<div>{AnalyzabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Stability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeStabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{StabilityFW[0]}</div>
					<div>{StabilityFW[1]}</div>
					<div>{StabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Maintainability_compliance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeMaintainabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{MaintainabilityFW[0]}</div>
					<div>{MaintainabilityFW[1]}</div>
					<div>{MaintainabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Fault_Tolerance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeFault_ToleranceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Fault_ToleranceFW[0]}</div>
					<div>{Fault_ToleranceFW[1]}</div>
					<div>{Fault_ToleranceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Recoverability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeRecoverabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{RecoverabilityFW[0]}</div>
					<div>{RecoverabilityFW[1]}</div>
					<div>{RecoverabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Reliability_Compliance Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeReliability_ComplianceFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{Reliability_ComplianceFW[0]}</div>
					<div>{Reliability_ComplianceFW[1]}</div>
					<div>{Reliability_ComplianceFW[2]}</div>
				</div>
			</div>

			<div className="qf">Changeability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeChangeabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{ChangeabilityFW[0]}</div>
					<div>{ChangeabilityFW[1]}</div>
					<div>{ChangeabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Testability Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeTestabilityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{TestabilityFW[0]}</div>
					<div>{TestabilityFW[1]}</div>
					<div>{TestabilityFW[2]}</div>
				</div>
			</div>

			<div className="qf">Maturity Quality Factor</div>
			<div>
				<select required onChange={handleSelectChangeMaturityFW}  >
						<option >Select Option</option>
						<option value="0.0,0.0,0.25">Very Low</option>
						<option value="0.0,0.25,0.50">Low</option>
						<option value="0.25,0.50,0.75">Medium</option>
						<option value="0.50,0.75,1.0">High</option>
						<option value="0.75,1.0,1.0">Very High</option>
				</select>
				<div className="qfvalues1">
					<div>{MaturityFW[0]}</div>
					<div>{MaturityFW[1]}</div>
					<div>{MaturityFW[2]}</div>
				</div>
			</div>



		</div>	


		<div className="headingofqf" >
			<div>Fuzzy Rate (Dev View) </div>

			<div className="qf">Suitability</div>
			<div className="devview">
				<div>{SuitabilityDEV[0]} </div>
				<div>{SuitabilityDEV[1]}</div>
				<div>{SuitabilityDEV[2]}</div>
			</div>

			<div className="qf">Accuracy</div>
			<div className="devview">
				<div>{AccuracyDEV[0]} </div>
				<div>{AccuracyDEV[1]}</div>
				<div>{AccuracyDEV[2]}</div>
			</div>

			<div className="qf">Interoperability</div>
			<div className="devview">
				<div>{InteroperabilityDEV[0]} </div>
				<div>{InteroperabilityDEV[1]}</div>
				<div>{InteroperabilityDEV[2]}</div>
			</div>

			<div className="qf">Functionality_Compliance</div>
			<div className="devview">
				<div>{Functionality_ComplianceDEV[0]} </div>
				<div>{Functionality_ComplianceDEV[1]}</div>
				<div>{Functionality_ComplianceDEV[2]}</div>
			</div>

			<div className="qf">Security</div>
			<div className="devview">
				<div>{SecurityDEV[0]} </div>
				<div>{SecurityDEV[1]}</div>
				<div>{SecurityDEV[2]}</div>
			</div>

			<div className="qf">Customization_new</div>
			<div className="devview">
				<div>{Customization_newDEV[0]} </div>
				<div>{Customization_newDEV[1]}</div>
				<div>{Customization_newDEV[2]}</div>
			</div>

			<div className="qf">Time_Behavior</div>
			<div className="devview">
				<div>{Time_BehaviorDEV[0]} </div>
				<div>{Time_BehaviorDEV[1]}</div>
				<div>{Time_BehaviorDEV[2]}</div>
			</div>

			<div className="qf">Resource_Behavior</div>
			<div className="devview">
				<div>{Resource_BehaviorDEV[0]} </div>
				<div>{Resource_BehaviorDEV[1]}</div>
				<div>{Resource_BehaviorDEV[2]}</div>
			</div>

			<div className="qf">Efficiency_Compliance</div>
			<div className="devview">
				<div>{Efficiency_ComplianceDEV[0]} </div>
				<div>{Efficiency_ComplianceDEV[1]}</div>
				<div>{Efficiency_ComplianceDEV[2]}</div>
			</div>

			<div className="qf">scalability</div>
			<div className="devview">
				<div>{scalabilityDEV[0]} </div>
				<div>{scalabilityDEV[1]}</div>
				<div>{scalabilityDEV[2]}</div>
			</div>

			<div className="qf">Performance</div>
			<div className="devview">
				<div>{PerformanceDEV[0]} </div>
				<div>{PerformanceDEV[1]}</div>
				<div>{PerformanceDEV[2]}</div>
			</div>

			<div className="qf">Data_availability_new</div>
			<div className="devview">
				<div>{Data_availability_newDEV[0]} </div>
				<div>{Data_availability_newDEV[1]}</div>
				<div>{Data_availability_newDEV[2]}</div>
			</div>

			<div className="qf">Replace_ability</div>
			<div className="devview">
				<div>{Replace_abilityDEV[0]} </div>
				<div>{Replace_abilityDEV[1]}</div>
				<div>{Replace_abilityDEV[2]}</div>
			</div>

			<div className="qf">Adaptability</div>
			<div className="devview">
				<div>{AdaptabilityDEV[0]} </div>
				<div>{AdaptabilityDEV[1]}</div>
				<div>{AdaptabilityDEV[2]}</div>
			</div>

			<div className="qf">Install_ability</div>
			<div className="devview">
				<div>{Install_abilityDEV[0]} </div>
				<div>{Install_abilityDEV[1]}</div>
				<div>{Install_abilityDEV[2]}</div>
			</div>

			<div className="qf">Co_existence</div>
			<div className="devview">
				<div>{Co_existenceDEV[0]} </div>
				<div>{Co_existenceDEV[1]}</div>
				<div>{Co_existenceDEV[2]}</div>
			</div>

			<div className="qf">Portability_compliance</div>
			<div className="devview">
				<div>{Portability_complianceDEV[0]} </div>
				<div>{Portability_complianceDEV[1]}</div>
				<div>{Portability_complianceDEV[2]}</div>
			</div>

			<div className="qf">Analyzability</div>
			<div className="devview">
				<div>{AnalyzabilityDEV[0]} </div>
				<div>{AnalyzabilityDEV[1]}</div>
				<div>{AnalyzabilityDEV[2]}</div>
			</div>

			<div className="qf">Stability</div>
			<div className="devview">
				<div>{StabilityDEV[0]} </div>
				<div>{StabilityDEV[1]}</div>
				<div>{StabilityDEV[2]}</div>
			</div>

			<div className="qf">Maintainability</div>
			<div className="devview">
				<div>{MaintainabilityDEV[0]} </div>
				<div>{MaintainabilityDEV[1]}</div>
				<div>{MaintainabilityDEV[2]}</div>
			</div>

			<div className="qf">Fault_Tolerance</div>
			<div className="devview">
				<div>{Fault_ToleranceDEV[0]} </div>
				<div>{Fault_ToleranceDEV[1]}</div>
				<div>{Fault_ToleranceDEV[2]}</div>
			</div>

			<div className="qf">Recoverability</div>
			<div className="devview">
				<div>{RecoverabilityDEV[0]} </div>
				<div>{RecoverabilityDEV[1]}</div>
				<div>{RecoverabilityDEV[2]}</div>
			</div>

			<div className="qf">Reliability_Compliance</div>
			<div className="devview">
				<div>{Reliability_ComplianceDEV[0]} </div>
				<div>{Reliability_ComplianceDEV[1]}</div>
				<div>{Reliability_ComplianceDEV[2]}</div>
			</div>

			<div className="qf">Changeability</div>
			<div className="devview">
				<div>{ChangeabilityDEV[0]} </div>
				<div>{ChangeabilityDEV[1]}</div>
				<div>{ChangeabilityDEV[2]}</div>
			</div>

			<div className="qf">Testability</div>
			<div className="devview">
				<div>{TestabilityDEV[0]} </div>
				<div>{TestabilityDEV[1]}</div>
				<div>{TestabilityDEV[2]}</div>
			</div>

			<div className="qf">Maturity</div>
			<div className="devview">
				<div>{MaturityDEV[0]} </div>
				<div>{MaturityDEV[1]}</div>
				<div>{MaturityDEV[2]}</div>
			</div>

			
		</div>

	</div>

	<div className="headingofqf"  >Final Dev Values</div>
	<div className="devview">
	<div>{max1}</div>
	<div>{max2}</div>
	<div>{max3}</div>
	</div>
 
    <div className="headingofqf">Integrated final value</div>
	<div className="finalinte">{integrated}</div>

</div>
  );
}

export default Tester;

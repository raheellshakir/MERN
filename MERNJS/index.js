// function myTable(sum1,sum2){
//     // var myTblNum =  document.querySelector("#tblNum").value;
//     // var tbleprnt = document.querySelector("#prttbl").innerHTML = "";
//     // for(let i = 1 ; i <= 10 ; i++){
//     //     console.log(`${myTblNum} x ${i} =  ${myTblNum*i}`)
//     //     document.querySelector("#prttbl").innerHTML += `${myTblNum} x ${i} =  ${myTblNum*i}<br>`;
//     // }
//     // document.querySelector("#tblNum").value = "";
//     console.log(sum1 + sum2)
// }
// myTable(5, 8);

const myTable = (sum1, sum2) => {
    return sum1 + sum2;
}
const a = myTable(5, 6);
console.log(a);


function requiredfieldsonpersonaloan(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();
    var optionSetAttribute = formContext.getAttribute("gits_requesttype").getValue();
    var age = formContext.getAttribute("gits_age").getValue();
    if (optionSetAttribute == 449930000 || optionSetAttribute == 449930005 || optionSetAttribute == 449930001) {
        if (age <= 21) {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("required");
        } else {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("none");
        }
        if (optionSetAttribute == 449930005){
            markRequiredForRahaDebit(true, formContext);
            formContext.getAttribute("gits_strloanpurpose").setRequiredLevel("required");
            formContext.getAttribute("gits_financingtype").setRequiredLevel("required");
            formContext.getAttribute("gits_applicationsubtype").setRequiredLevel("required");
            formContext.getAttribute("gits_applicationtype").setRequiredLevel("required");
            formContext.getAttribute("gits_identificationtype").setRequiredLevel("required");
            formContext.getAttribute("gits_identificationnumber").setRequiredLevel("required");
            formContext.getAttribute("gits_cifnumber").setRequiredLevel("required");
            formContext.getAttribute("gits_customertype").setRequiredLevel("required");
            formContext.getAttribute("gits_title").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantfirstname").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantlastname").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantfullnameeng").setRequiredLevel("required");
            formContext.getAttribute("gits_nationality").setRequiredLevel("required");
            formContext.getAttribute("gits_placeofbirth").setRequiredLevel("required");
            formContext.getAttribute("gits_dateofbirth").setRequiredLevel("required");
            formContext.getAttribute("gits_age").setRequiredLevel("required");
            formContext.getAttribute("gits_maritalstatus").setRequiredLevel("required");
            formContext.getAttribute("gits_idissuedate").setRequiredLevel("required");
            formContext.getAttribute("gits_idexpirydate").setRequiredLevel("required");
            formContext.getAttribute("gits_idissueplace").setRequiredLevel("required");
            formContext.getAttribute("gits_gender").setRequiredLevel("required");
            formContext.getAttribute("gits_educationstatus").setRequiredLevel("required");
            formContext.getAttribute("gits_nooffamilymembers").setRequiredLevel("required");
            formContext.getAttribute("gits_noofdependents").setRequiredLevel("required");
            formContext.getAttribute("gits_address1").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantcity").setRequiredLevel("required");
            formContext.getAttribute("gits_street").setRequiredLevel("required");
            formContext.getAttribute("gits_apartmentno").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantemail").setRequiredLevel("required");
            formContext.getAttribute("gits_residence").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantcountry").setRequiredLevel("required");
            formContext.getAttribute("gits_employertype").setRequiredLevel("required");
            formContext.getAttribute("gits_nameofcurrentemployer").setRequiredLevel("required");
            formContext.getAttribute("gits_department").setRequiredLevel("required");
            formContext.getAttribute("gits_workaddress").setRequiredLevel("required");
            formContext.getAttribute("gits_employercity").setRequiredLevel("required");
            formContext.getAttribute("gits_applicantoccupation").setRequiredLevel("required");
            formContext.getAttribute("gits_employerpayday").setRequiredLevel("required");
            formContext.getAttribute("gits_emppoboxno").setRequiredLevel("required");
            formContext.getAttribute("gits_designationofemployee").setRequiredLevel("required");
            formContext.getAttribute("gits_employerstartdate").setRequiredLevel("required");
            formContext.getAttribute("gits_basicsalary").setRequiredLevel("required");
            formContext.getAttribute("gits_netsalary").setRequiredLevel("required");
            formContext.getAttribute("gits_financialaccount").setRequiredLevel("required");
            formContext.getAttribute("gits_productid").setRequiredLevel("required");
            formContext.getAttribute("gits_loanterm").setRequiredLevel("required");
            formContext.getAttribute("gits_loanreason").setRequiredLevel("required");
            formContext.getAttribute("gits_loanamount").setRequiredLevel("required");
            formContext.getAttribute("gits_currency").setRequiredLevel("required");
         } 
    else if (optionSetAttribute == 449930002) {
        if (age <= 21) {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("required");
            } 
        else {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("none");
            }
        formContext.getAttribute("gits_strloanpurpose").setRequiredLevel("required");
        formContext.getAttribute("gits_financingtype").setRequiredLevel("required");
        formContext.getAttribute("gits_applicationsubtype").setRequiredLevel("required");
        formContext.getAttribute("gits_applicationtype").setRequiredLevel("required");
        formContext.getAttribute("gits_financialaccount").setRequiredLevel("required");
        formContext.getAttribute("gits_limit").setRequiredLevel("required");
        formContext.getAttribute("gits_cardholdername").setRequiredLevel("required");
        formContext.getAttribute("gits_cardproductcode").setRequiredLevel("required");
        formContext.getAttribute("gits_title").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantfirstname").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantlastname").setRequiredLevel("required");
        formContext.getAttribute("gits_address1").setRequiredLevel("required");
        formContext.getAttribute("gits_dateofbirth").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantcity").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantemail").setRequiredLevel("required");
        formContext.getAttribute("gits_customertype").setRequiredLevel("required");
        formContext.getAttribute("gits_idissueplace").setRequiredLevel("required");
        formContext.getAttribute("gits_educationstatus").setRequiredLevel("required");
        formContext.getAttribute("gits_noofdependents").setRequiredLevel("required");
        formContext.getAttribute("gits_residence").setRequiredLevel("required");
        formContext.getAttribute("gits_employertype").setRequiredLevel("required");
        formContext.getAttribute("gits_nameofcurrentemployer").setRequiredLevel("required");
        formContext.getAttribute("gits_department").setRequiredLevel("required");
        formContext.getAttribute("gits_workaddress").setRequiredLevel("required");
        formContext.getAttribute("gits_employercity").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantoccupation").setRequiredLevel("required");
        formContext.getAttribute("gits_employerpayday").setRequiredLevel("required");
        formContext.getAttribute("gits_designationofemployee").setRequiredLevel("required");
        formContext.getAttribute("gits_basicsalary").setRequiredLevel("required");
        formContext.getAttribute("gits_netsalary").setRequiredLevel("required");
        formContext.getAttribute("gits_otherincome").setRequiredLevel("required");
        formContext.getAttribute("gits_yearofexperience").setRequiredLevel("required");
        formContext.getAttribute("gits_otherfinancialobligation").setRequiredLevel("required");
        formContext.getAttribute("gits_grosssalary").setRequiredLevel("required");

    } else if (optionSetAttribute == 449930004) {
        formContext.getAttribute("gits_applicantfirstname").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantlastname").setRequiredLevel("required");
        formContext.getAttribute("gits_cardholdername").setRequiredLevel("required");
        formContext.getAttribute("gits_identificationnumber").setRequiredLevel("required");
        formContext.getAttribute("gits_identificationtype").setRequiredLevel("required");
        formContext.getAttribute("gits_relation").setRequiredLevel("required");
        formContext.getAttribute("gits_dateofbirth").setRequiredLevel("required");
        formContext.getAttribute("gits_age").setRequiredLevel("required");
        formContext.getAttribute("gits_gender").setRequiredLevel("required");
        formContext.getAttribute("gits_limit").setRequiredLevel("required");
        formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("required");
        formContext.getAttribute("gits_cardproductcode").setRequiredLevel("required");

    } else {
        if (age <= 21) {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("required");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("required");
        } else {
            formContext.getAttribute("gits_dependentname").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentaddress").setRequiredLevel("none");
            formContext.getAttribute("gits_dependentrelation").setRequiredLevel("none");
        }
        formContext.getAttribute("gits_limit").setRequiredLevel("none");
        formContext.getAttribute("gits_cardholdername").setRequiredLevel("none");
        formContext.getAttribute("gits_cardproductcode").setRequiredLevel("none");
        formContext.getAttribute("gits_relation").setRequiredLevel("none");
        formContext.getAttribute("gits_strloanpurpose").setRequiredLevel("none");
        formContext.getAttribute("gits_strloanpurpose").setRequiredLevel("none");
        formContext.getAttribute("gits_financialaccount").setRequiredLevel("required");
        formContext.getAttribute("gits_financingtype").setRequiredLevel("none");
        formContext.getAttribute("gits_applicationsubtype").setRequiredLevel("none");
        formContext.getAttribute("gits_applicationtype").setRequiredLevel("none");
        formContext.getAttribute("gits_identificationtype").setRequiredLevel("none");
        formContext.getAttribute("gits_identificationnumber").setRequiredLevel("none");
        formContext.getAttribute("gits_cifnumber").setRequiredLevel("none");
        formContext.getAttribute("gits_customertype").setRequiredLevel("none");
        formContext.getAttribute("gits_title").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantfirstname").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantlastname").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantfullnameeng").setRequiredLevel("none");
        formContext.getAttribute("gits_nationality").setRequiredLevel("none");
        formContext.getAttribute("gits_placeofbirth").setRequiredLevel("none");
        formContext.getAttribute("gits_dateofbirth").setRequiredLevel("none");
        formContext.getAttribute("gits_age").setRequiredLevel("none");
        formContext.getAttribute("gits_maritalstatus").setRequiredLevel("none");
        formContext.getAttribute("gits_idissuedate").setRequiredLevel("none");
        formContext.getAttribute("gits_idexpirydate").setRequiredLevel("none");
        formContext.getAttribute("gits_idissueplace").setRequiredLevel("none");
        formContext.getAttribute("gits_gender").setRequiredLevel("none");
        formContext.getAttribute("gits_educationstatus").setRequiredLevel("none");
        formContext.getAttribute("gits_nooffamilymembers").setRequiredLevel("none");
        formContext.getAttribute("gits_noofdependents").setRequiredLevel("none");
        formContext.getAttribute("gits_dependentname").setRequiredLevel("none");
        formContext.getAttribute("gits_dependentaddress").setRequiredLevel("none");
        formContext.getAttribute("gits_dependentrelation").setRequiredLevel("none");
        formContext.getAttribute("gits_address1").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantcity").setRequiredLevel("none");
        formContext.getAttribute("gits_street").setRequiredLevel("none");
        formContext.getAttribute("gits_apartmentno").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("none");
        formContext.getAttribute("gits_unitbldgno").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantcellnumber").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantemail").setRequiredLevel("none");
        formContext.getAttribute("gits_residence").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantcountry").setRequiredLevel("none");
        formContext.getAttribute("gits_employertype").setRequiredLevel("none");
        formContext.getAttribute("gits_nameofcurrentemployer").setRequiredLevel("none");
        formContext.getAttribute("gits_department").setRequiredLevel("none");
        formContext.getAttribute("gits_workaddress").setRequiredLevel("none");
        formContext.getAttribute("gits_employercity").setRequiredLevel("none");
        formContext.getAttribute("gits_applicantoccupation").setRequiredLevel("none");
        formContext.getAttribute("gits_employerpayday").setRequiredLevel("none");
        formContext.getAttribute("gits_emppoboxno").setRequiredLevel("none");
        formContext.getAttribute("gits_designationofemployee").setRequiredLevel("none");
        formContext.getAttribute("gits_employerstartdate").setRequiredLevel("none");
        formContext.getAttribute("gits_basicsalary").setRequiredLevel("none");
        formContext.getAttribute("gits_otherincome").setRequiredLevel("none");
        formContext.getAttribute("gits_netsalary").setRequiredLevel("none");
        formContext.getAttribute("gits_yearofexperience").setRequiredLevel("none");
        formContext.getAttribute("gits_otherfinancialobligation").setRequiredLevel("none");
        formContext.getAttribute("gits_grosssalary").setRequiredLevel("none");
        formContext.getAttribute("gits_productid").setRequiredLevel("none");
        formContext.getAttribute("gits_loanterm").setRequiredLevel("none");
        formContext.getAttribute("gits_loanreason").setRequiredLevel("none");
        formContext.getAttribute("gits_loanamount").setRequiredLevel("required");
        formContext.getAttribute("gits_currency").setRequiredLevel("required");
        formContext.getAttribute("gits_unitbldgno").setRequiredLevel("none");
        //formContext.getAttribute("gits_housecellnumber").setRequiredLevel("none");

    }
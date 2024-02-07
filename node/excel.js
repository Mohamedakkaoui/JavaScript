const xlsx = require('xlsx')

let pathfile = './employee_data.xlsx'

try{

    const readFile = xlsx.readFile(path_file)
    //console.log(readFile)

    const sheetName = readFile.SheetNames[0]
    if(!sheetName){
        throw new Error('Sheet not found')
    }

    const dataSheet = readFile.Sheets[sheetName] 
    //console.log(dataSheet)
    //convertir le data sheet to json

    const dataJson = xlsx.utils.sheet_to_json(dataSheet)
    //console.log(dataJson);

    const newData = dataJson.map(emp=>{
        let bonusPercent = 0
        let bonusAmount = 0
        if(isNaN(emp.AnnualSalary)){
            throw new Error('Invalid Type ')
        }
        if(emp.AnnualSalary < 50000){
            bonusPercent = 5 
        }else if(emp.AnnualSalary <= 100000){
            bonusPercent = 7
        }else{
            bonusPercent = 10
        }
        bonusAmount = (emp.AnnualSalary * bonusPercent )/100
        //console.log('New bonus : ',bonusAmount )
        return{
            ...emp,
            bonusPercent : bonusPercent,
            bonusAmount : bonusAmount
        }
    })
    //console.log(newData);

    //create new excel file
    const backSheet = xlsx.utils.json_to_sheet(newData)

    backSheet['A1'] = {v:"EMPLOYEE" }
    backSheet['B1'] = {v: "AnnualSalary" }
    backSheet['C1'] = {v: "Bonus Percent" }
    backSheet['D1'] = {v: "Bonus Amount" }

    const newFile = xlsx.utils.book_new() 
    xlsx.utils.book_append_sheet(newFile, backSheet, 'UpdatedUsers')

    const newPath = './updated.xlsx'

    xlsx.writeFile(newFile, newPath)
    console.log(backSheet);
}catch(error){
    console.log('Error',error.message);
}
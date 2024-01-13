let cl=console.log;

class Department{
    constructor(public dName:string,  private dId:string){

    }
    public describe(){
        cl(`this is department ${this.dName} & this is id ${this.dId}`)
    }
}
// let d1=new Department("IT","D-123")
// d1.dName="Marketing"
// d1.describe()
// cl(d1)

// let d2=new Department("IT","F900")

// cl(d2)


class ITDepartment extends Department{
    private emp:Array<string>=[]
    constructor(empName:string, empId:number){
        super(empName,empId)
    }
}


let it=new ITDepartment("IT",123)
cl(it)


class FinanceDepartment extends Department{
    private reportsArr:Array<string>=["Oct Sal","Nov Sal","Dec Sal"]
    private lastReport!:string
    constructor(){
        super("Finance","D-456")
        this.lastReport=this.reportsArr[this.reportsArr.length-1]
    }
}

get accessLastReport():string{
return this.lastReport=updatedReport
}

set accessLastReport(updatedReport:string){
    this.lastReport=updatedReport
    this.reportArr[this.WebTransportDatagramDuplexStream.length-1]=updatedReport
}



let finance= new FinanceDepartment()
cl(finance)
cl(finance.accessLastReport())
finance.accessLastReport="Dec 2023 Salary Slip"

















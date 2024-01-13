var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cl = console.log;
var Department = /** @class */ (function () {
    function Department(dName, dId) {
        this.dName = dName;
        this.dId = dId;
    }
    Department.prototype.describe = function () {
        cl("this is department ".concat(this.dName, " & this is id ").concat(this.dId));
    };
    return Department;
}());
// let d1=new Department("IT","D-123")
// d1.dName="Marketing"
// d1.describe()
// cl(d1)
// let d2=new Department("IT","F900")
// cl(d2)
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(empName, empId) {
        var _this = _super.call(this, empName, empId) || this;
        _this.emp = [];
        return _this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment("IT", "123");
cl(it);
var itr = new ITDepartment("jhon", "s-123");
cl(itr);
var FinanceDepartment = /** @class */ (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment() {
        var _this = _super.call(this, "Finance", "D-456") || this;
        _this.reportsArr = ["Oct Sal", "Nov Sal", "Dec Sal"];
        _this.lastReport = _this.reportsArr[_this.reportsArr.length - 1];
        return _this;
    }
    Object.defineProperty(FinanceDepartment.prototype, "accessLastReport", {
        get: function () {
            return this.lastReport;
        },
        set: function (updatedReport) {
            this.lastReport = updatedReport;
            this.reportsArr[this.reportsArr.length - 1] = updatedReport;
        },
        enumerable: false,
        configurable: true
    });
    return FinanceDepartment;
}(Department));
var finance = new FinanceDepartment();
cl(finance);
cl(finance.accessLastReport);
finance.accessLastReport = "Dec 2023 Salary Slip";

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
var it = new ITDepartment("IT", 123);
cl(it);

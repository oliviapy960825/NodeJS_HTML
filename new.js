/*
var sample = {"RetailStoreID": "219", "WorkstationID": "1", "TillID": "219001000518", "SequenceNumber": "30856",
"BusinessDayDate": "2020-09-18", "BeginDateTime": "2020-09-22T12:22:48.774", "EndDateTime": "2020-09-23T09:34:04.723",
"OperatorID": "5", "CurrencyCode": "USD", "RetailTransaction": {"CustomerAccount" : {"LoyaltyAccount" : {"LoyaltyAccountID" : "111", "dummy" : "dummy2"}, "dummy" : "dummy11"},"LineItem": [{"SequenceNumber": "1", "BeginDateTime": "2020-09-22T12:26:43.655",
 "EndDateTime": "2020-09-22T12:26:43.707", "Sale": {"ItemID": "83931800052", "Description": "1 + 1 = 3 Cava Brut", "RegularSalesUnitPrice": "16.49",
 "ActualSalesUnitPrice": "16.49", "ExtendedAmount": "16.49", "Quantity": "1", "ScannedItemID": "83931800052", "GiftReceiptFlag": "false",
 "Associate": {"AssociateID": "5"}, "PercentageOfItem": {"AssociateID": "5", "Percentage": "1"}, "Tax": {"TaxAuthority": "TA-VA-219-N",
 "Amount": "0.0000000", "TaxLocationId": "GR-VA-219", "TaxGroupId": "1"}}}], "RoundedTotal": "0.00",
 "CustomerAccount": {"LoyaltyAccount": {"LoyaltyAccountID": "8325268168958", "dummy" : "dummy11"}, "dummy" : "dummy2"},
 "Customer": {"Name": "Johnny Smith", "ActiveFlag": "true", "Address": {"AddressLine": "123 HOME", "City": "VB", "State": "VA", "PostalCode": "12345"},
 "eMail": "wineshop1@gmail.com", "AccountNumber": "3263030", "AlternateKey": [{"AlternateID": "205022000003"}, {"AlternateID": "3263030"}]}},
 "TransactionID": "00219000012020091800030856"};*/

var sample = {"TransactionType":"RETAIL_SALE","xmlns:ns0":"http://v4.ws.poslog-ext.xcenter.dtv/","CancelFlag":"false","WorkstationID":"2","RetailTransaction":{"TypeCode":"Transaction","TransactionStatus":"Delivered","RoundedTotal":"0.00","LineItem":[{"SequenceNumber":"1","BeginDateTime":"2021-01-27T13:36:15.796","Sale":{"ScannedItemID":"338065120007","Associate":{"AssociateID":"5"},"ExtendedAmount":"113.96","RetailPriceModifier":[{"SequenceNumber":"1","ReasonCode":"DEAL","MethodCode":"Promotion","PromotionID":"6814:28368:","VoidFlag":"false","Amount":{"text":"6.00","Action":"Subtract"}}],"ItemID":"338065120007","PercentageOfItem":{"Percentage":"1","AssociateID":"5"},"GiftReceiptFlag":"false","Tax":{"Percent":"0.0000000","TaxType":"Sales","VoidFlag":"false","Amount":"0.0000000","TaxGroupId":"1","TaxableAmount":"113.96","TaxAuthority":"TA-VA-219-N","TaxLocationId":"GR-VA-219"},"Description":"Item 1","RegularSalesUnitPrice":"29.99","Quantity":"4","ItemType":"Stock","ActualSalesUnitPrice":"28.49"},"VoidFlag":"false","EndDateTime":"2021-01-27T13:36:15.871","EntryMethod":"Keyed"},{"EndDateTime":"2021-01-27T13:36:19.133","SequenceNumber":"2","EntryMethod":"Keyed","Sale":{"ItemID":"338065120007","RegularSalesUnitPrice":"29.99","GiftReceiptFlag":"false","ScannedItemID":"338065120007","ExtendedAmount":"26.99","ActualSalesUnitPrice":"26.99","ItemType":"Stock","Description":"Item 1","RetailPriceModifier":[{"PromotionID":"6814:28368:","ReasonCode":"DEAL","VoidFlag":"false","MethodCode":"Promotion","SequenceNumber":"1","Amount":{"Action":"Subtract","text":"3.00"}}],"Associate":{"AssociateID":"5"},"PercentageOfItem":{"Percentage":"1","AssociateID":"5"},"Tax":{"TaxType":"Sales","TaxLocationId":"GR-VA-219","Amount":"0.0000000","TaxAuthority":"TA-VA-219-N","Percent":"0.0000000","VoidFlag":"false","TaxableAmount":"26.99","TaxGroupId":"1"},"Quantity":"1"},"VoidFlag":"false","BeginDateTime":"2021-01-27T13:36:19.086"},{"Sale":{"ExtendedAmount":"27.00","Description":"Item 1","Quantity":"1","ItemID":"338065120007","RegularSalesUnitPrice":"29.99","PercentageOfItem":{"AssociateID":"5","Percentage":"1"},"RetailPriceModifier":[{"SequenceNumber":"1","ReasonCode":"DEAL","Amount":{"Action":"Subtract","text":"2.99"},"MethodCode":"Promotion","VoidFlag":"false","PromotionID":"6814:28368:"}],"GiftReceiptFlag":"false","ActualSalesUnitPrice":"27.00","ItemType":"Stock","Associate":{"AssociateID":"5"},"ScannedItemID":"338065120007","Tax":{"VoidFlag":"false","TaxableAmount":"27.00","TaxType":"Sales","TaxGroupId":"1","Percent":"0.0000000","Amount":"0.0000000","TaxAuthority":"TA-VA-219-N","TaxLocationId":"GR-VA-219"}},"EndDateTime":"2021-01-27T13:36:21.173","SequenceNumber":"3","VoidFlag":"false","EntryMethod":"Keyed","BeginDateTime":"2021-01-27T13:36:21.124"},{"EntryMethod":"Keyed","SequenceNumber":"4","VoidFlag":"false","BeginDateTime":"2021-01-27T13:36:40.705","Sale":{"RegularSalesUnitPrice":"29.99","ItemType":"Stock","ActualSalesUnitPrice":"26.99","ItemID":"68292121276","Quantity":"2","GiftReceiptFlag":"false","ScannedItemID":"68292121276","RetailPriceModifier":[{"Amount":{"text":"6.00","Action":"Subtract"},"PromotionID":"6814:28368:","ReasonCode":"DEAL","MethodCode":"Promotion","VoidFlag":"false","SequenceNumber":"1"}],"Tax":{"Percent":"0.0000000","TaxGroupId":"1","TaxType":"Sales","TaxLocationId":"GR-VA-219","VoidFlag":"false","TaxableAmount":"53.98","TaxAuthority":"TA-VA-219-N","Amount":"0.0000000"},"Description":"Item 2","Associate":{"AssociateID":"5"},"PercentageOfItem":{"Percentage":"1","AssociateID":"5"},"ExtendedAmount":"53.98"},"EndDateTime":"2021-01-27T13:36:40.794"},{"SequenceNumber":"5","VoidFlag":"false","BeginDateTime":"2021-01-27T13:37:16.334","EndDateTime":"2021-01-27T13:37:16.801","Tender":{"TypeCode":"Sale","TenderType":"Cash","TenderID":"USD_CURRENCY","ChangeFlag":"false","Amount":{"Currency":"USD","text":"221.93"}}},{"VoidFlag":"false","BeginDateTime":"2021-01-27T13:36:15.915","EndDateTime":"2021-01-27T13:36:15.915","SequenceNumber":"6","Tax":{"TaxType":"Sales","TaxableAmount":"221.93","Percent":"0.0000000","TaxLocationId":"GR-VA-219","TaxGroupId":"1","Amount":"0.0000000","TaxAuthority":"TA-VA-219-N","VoidFlag":"false"}}],"Total":{"TotalType":"TransactionGrandAmount","text":"221.93"}},"EndDateTime":"2021-01-27T13:37:16.881","TillID":"219002000146","OfflineFlag":"false","BeginDateTime":"2021-01-27T13:36:15.871","BusinessDayDate":"2021-01-27","CurrencyCode":"USD","TransactionID":"00219000022021012700003400","OperatorID":"5","SequenceNumber":"3400","AppVersion":"17.0.2.0.46 - 7.2.1 - 0.0","RetailStoreID":"219","TrainingModeFlag":"false"};
//var sample = {"RetailTransaction": {"LineItem" : [{"Sale" : {"RetailPriceModifier" : [{"Amount" : 50, "Coupon" : {"ScanCode" : "111"}}, {"Amount" : 70, "Coupon" : {"ScanCode" : "111"}}]}}]}};
//{"Sale" : {"RetailPriceModifier" : [{"Amount" : 50, "Coupon" : {"ScanCode" : "111"}}]}}]}};
//var sample = {
  //"PosTransactionProperties" : [{"PosTransactionPropertyValue" : "some values", "PosTransactionPropertyCode" : "some code"}, {"PosTransactionPropertyValue" : "some values", "PosTransactionPropertyCode" : "some code"}]
//};
//result["RetailTransaction"]["LineItem"]["Tender"]
function get(object, keyList) {
    //var keyList = key.split(".");
    if(typeof object == "undefined" || object == null) return null;
    if(keyList.length == 1){
      var result = object[keyList[0]];
    }
    else{
      var result = object[keyList[0]];
      if(typeof result == "undefined") return null;
      for(i = 1; i < keyList.length; i++){
        var result = result[keyList[i]];
        if(typeof result == "undefined") return null;
      }
    }
    return (typeof result !== "undefined") ? result : null;
}

function returnArr(array, keys){//function works right, passed parameter type is not right
  //console.log(typeof array == 'Array');
  var returnArray = [];
  if(typeof array == "undefined" || array == null ){
    var tempArr = null;
    var tempDict = {};
    for(j = 0; j < keys.length; j++){
      //console.log(key);
      //var obj = {};
      var key = keys[j];
      //console.log(typeof key);
      var keyList = key.split(",");
      //keyList = ["Coupon", "ScanCode"]
      if(keyList.length == 1) tempDict[key] = get(tempArr, [key]);
      else{
        //console.log(i);
      tempDict[keyList[0]] = get(get(tempArr, [keyList[0]]), keyList.slice(1, keyList.length));
      //console.log(get(tempArr, keyList));
    }

  }
    returnArray.push(tempDict);
  }


//keys = ["LineItemPropertyValue", "LineItemPropertyCode"]
  else{
  //console.log(array[1]);
  for(i = 0; i < array.length; i++){
    //console.log(i);
    var tempArr = array[i];
    //console.log(tempArr);
    //console.log(keys.length);
    var tempDict = {};
    for(j = 0; j < keys.length; j++){
      var key = keys[j];
      //console.log(keys.length);
      var keyList = key.split(",");

      if(keyList.length == 1) tempDict[key] = get(tempArr, [key]);
      else{
        //console.log(i);
      tempDict[keyList[0]] = get(tempArr[keyList[0]], keyList.slice(1, keyList.length));
      //console.log(get(tempArr, keyList));

    }
  }
    returnArray.push(tempDict);
    //console.log(i);
  }
}
  //console.log(returnArray);
  return returnArray;
}

var tmp = [{"abc" : "def", "des" : "uhs"}, {"234" : "345"}];
//console.log(returnArr(tmp, ["abc", "efg"]));

// Also need to figure out a systematic way to only access if it exists, otherwise set it to null;


function retailTransactionProcessor(rt){
  var retailTransaction = {};
  //if(rt == null) return retailTransaction;
  retailTransaction.RoundedTotal = get(rt, ["RoundedTotal"]);
  retailTransaction.CustomerAccount = {
    "LoyaltyAccount" : {
      "LoyaltyAccountID" : get(rt, ["CustomerAccount", "LoyaltyAccount", "LoyaltyAccountID"])
    }
  }

  retailTransaction.Customer = {
    "Name" : get(rt, ["Customer", "Name"]),
    "ActiveFlag" : get(rt, ["Customer", "ActiveFlag"]),
    "Address" : get(rt, ["Customer", "Address"]),
    "eMail" : get(rt, ["Customer","eMail"]),
    "AccountNumber" : get(rt, ["Customer", "AccountNumber"]),
    "AlternateKey" : returnArr(get(rt, ["Customer", "AlternateKey"]), ["AlternateID"])//returnAlternateKey(rt)
  };

  retailTransaction.Total = get(rt, ["Total"]);
  retailTransaction.TransactionLink = {
    "RetailStoreID" : get(rt, ["TransactionLink", "RetailStoreID"]),
    "WorkstationID" : get(rt, ["TransactionLink", "WorkstationID"]),
    "SequenceNumber" : get(rt, ["TransactionLink", "SequenceNumber"]),
    "BusinessDayDate" : get(rt, ["TransactionLink", "BusinessDayDate"])
  };

  retailTransaction.LineItem = [];


  if(typeof rt["LineItem"] != "undefined" && rt["LineItem"] != null){

  for(j = 0; j < rt["LineItem"].length; j++){
    var lineItem = rt["LineItem"][j];
    retailTransaction.LineItem.push({
      "EndDateTime" : get(lineItem, ["EndDateTime"]),
      "SequenceNumber" : get(lineItem,["SequenceNumber"]),
      "BeginDateTime" : get(lineItem,["BeginDateTime"]),
      "Tax" : {
        "TaxGroupId" : get(lineItem, ["Tax", "TaxGroupId"]),
        "TaxLocationId" : get(lineItem, ["Tax", "TaxLocationId"]),
        "Amount" : get(lineItem, ["Tax", "Amount"]),
        "TaxableAmount" : get(lineItem, ["Tax", "TaxableAmount"]),
        "TaxAuthority" : get(lineItem, ["Tax", "TaxAuthority"]),
        "Percent" : get(lineItem, ["Tax", "Percent"])
      },
      "Discount" : {
        "Rounding" : get(lineItem, ["Discount", "Rounding"]),
        "DiscountId" : get(lineItem, ["Discount", "DiscountId"]),
        "Amount" : get(lineItem, ["Discount","Amount"])
      },
      "Coupon" : {
        "CouponId" : get(lineItem, ["Coupon", "CouponId"])
      },
      "Tender" : {
        "CreditDebit" : {
          "HashedCardNumber" : get(lineItem, ["Tender", "CreditDebit", "HashedCardNumber"]),
          "ReconciliationCode" : get(lineItem, ["Tender", "CreditDebit", "ReconciliationCode"]),
          "ExpirationDateEncrypted" : get(lineItem, ["Tender", "CreditDebit", "ExpirationDateEncrypted"]),
          "AuthorizationToken" : get(lineItem, ["Tender", "CreditDebit", "AuthorizationToken"]),
          "PrimaryAccountNumber" : get(lineItem, ["Tender", "CreditDebit", "PrimaryAccountNumber"]),
          "MaskedCardNumber" : get(lineItem, ["Tender", "CreditDebit", "MaskedCardNumber"])
        },
        "Voucher" : {
          "Description" : get(lineItem, ["Tender", "Voucher", "Description"]),
          "FaceValueAmount" : get(lineItem, ["Tender", "Voucher", "FaceValueAmount"]),
          "CardNumber" : get(lineItem, ["Tender", "Voucher", "CardNumber"]),
          "UnspentAmount" : get(lineItem, ["Tender", "Voucher", "UnspentAmount"])
        },
        "Amount" : get(lineItem, ["Tender", "Amount"]),
        "Check" : {
          "CheckNumber" : get(lineItem, ["Tender", "Check", "CheckNumber"])
        },
        "SerialNumber" : get(lineItem, ["Tender", "SerialNumber"]),
        //"LineItemProperty" : get(lineItem, ["Tender", "LineItemProperty"]),
        "LineItemProperty" : returnArr(get(lineItem, ["Tender", "LineItemProperty"]), ["LineItemPropertyValue", "LineItemPropertyCode"]),

        "Authorization" : {
          "AuthorizationDateTime" : get(lineItem, ["Tender", "Authorization", "AuthorizationDateTime"]),
          "AdjudicationCode" : get(lineItem, ["Tender", "Authorization", "AdjudicationCode"]),
          "AuthorizationCode" : get(lineItem, ["Tender", "Authorization", "AuthorizationCode"]),
          "ReferenceNumber" : get(lineItem, ["Tender", "Authorization", "ReferenceNumber"]),
          "Discount" : get(lineItem, ["Tender", "Authorization", "Discount"]),
          "Tax" : get(lineItem, ["Tender", "Authorization", "Tax"]),
          "Freight" : get(lineItem, ["Tender", "Authorization", "Freight"]),
          "Duty" : get(lineItem, ["Tender", "Authorization", "Duty"]),
          "RequestedAmount" : get(lineItem, ["Tender", "Authorization", "RequestedAmount"])
        },

        "TenderID" : get(lineItem, ["Tender", "TenderID"])
      },
        "Return" : {
          "ExtendedAmount" : get(lineItem, ["Return", "ExtendedAmount"]),
          "Quantity" : get(lineItem, ["Return", "Quantity"]),
          "TransactionLink" : {
            "LineItemSequenceNumber" : get(lineItem, ["Return", "TransactionLink", "LineItemSequenceNumber"]),
            "WorkstationID" : get(lineItem, ["Return", "TransactionLink", "WorkstationID"]),
            "BusinessDayDate" : get(lineItem, ["Return", "TransactionLink", "BusinessDayDate"]),
            "SequenceNumber" : get(lineItem, ["Return", "TransactionLink", "SequenceNumber"]),
            "RetailStoreID" : get(lineItem, ["Return", "TransactionLink", "RetailStoreID"])
          },
          "ItemID" : get(lineItem, ["Return", "ItemID"]),
          "Associate" : {
            "AssociateID" : get(lineItem, ["Return", "Associate", "AssociateID"])
          },
          "Reason" : get(lineItem, ["Return", "Reason"]),
          "Description" : get(lineItem, ["Return", "Description"]),
          "ActualSalesUnitPrice" : get(lineItem, ["Return", "ActualSalesUnitPrice"]),
          "RegularSalesUnitPrice" : get(lineItem, ["Return", "RegularSalesUnitPrice"]),
          "Tax" : {
            "TaxableAmount" : get(lineItem, ["Return", "Tax", "TaxableAmount"]),
            "TaxOverride" : {
              "ReasonCode" : get(lineItem, ["Return", "Tax", "TaxOverride", "ReasonCode"]),
              "NewTaxPercent" : get(lineItem, ["Return", "Tax", "TaxOverride", "NewTaxPercent"]),
              "OriginalTaxPercent" : get(lineItem, ["Return", "Tax", "TaxOverride", "OriginalTaxPercent"]),
              "NewTaxAmount" : get(lineItem, ["Return", "Tax", "TaxOverride", "NewTaxAmount"]),
              "OriginalTaxAmount" : get(lineItem, ["Return", "Tax", "TaxOverride", "OriginalTaxAmount"])
            },
            "Percent" : get(lineItem, ["Return", "Tax", "Percent"]),
            "TaxGroupId" : get(lineItem, ["Return", "Tax", "TaxGroupId"]),
            "TaxAuthority" : get(lineItem, ["Return", "Tax", "TaxAuthority"]),
            "TaxLocationId" : get(lineItem, ["Return", "Tax", "TaxLocationId"]),
            "Amount" : get(lineItem, ["Return", "Tax", "Amount"])
          },
          "Disposition" : get(lineItem, ["Return", "Disposition"]),
          "PercentageOfItem" : {
            "AssociateID" : get(lineItem, ["Return", "PercentageOfItem", "AssociateID"]),
            "Percentage" : get(lineItem, ["Return", "PercentageOfItem", "Percentage"])
          },
          "Disposal" : get(lineItem, ["Return", "Disposal"]),
          "ReturnType" : get(lineItem, ["Return", "ReturnType"]),
          //"RetailPriceModifier" : get(lineItem, ["Return", "RetailPriceModifier"]),
          "RetailPriceModifier" : returnArr(get(lineItem, ["Return", "RetailPriceModifier"]), [ "PreviousPrice", "Amount", "SequenceNumber", "ReasonCode", "DiscountReasonCode", "NewPrice"]),

        },
        "Sale" : {
          "ActualSalesUnitPrice" : get(lineItem, ["Sale", "ActualSalesUnitPrice"]),
          "SerialNumber" : get(lineItem, ["Sale", "SerialNumber"]),
          "RetailPriceModifier" : returnArr(get(lineItem, ["Sale", "RetailPriceModifier"]), ["ReasonCode", "PromotionID","Amount","SequenceNumber","SerialNumber","Coupon,ScanCode"]),//there's a ScanCode under Coupon

          "ItemID" : get(lineItem, ["Sale", "ItemID"]),
          "GiftReceiptFlag" : get(lineItem, ["Sale", "GiftReceiptFlag"]),
          "LineItemAssociation" : {
            "ChildRetailTransactionLineItemSequence" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailTransactionLineItemSequence"]),
            "ChildTransactionSequence" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailTransactionSequence"]),
            "ChildWorkstationId" : get(lineItem, ["Sale", "LineItemAssociation", "ChildWorkstationId"]),
            "LineItemAssociationTypeCodeString" : get(lineItem, ["Sale", "LineItemAssociation", "LineItemAssociationTypeCodeString"]),
            "LineItemAssociationModifierSequence" : get(lineItem, ["Sale", "LineItemAssociation", "LineItemAssociationModifierSequence"]),
            "ChildBusinessDate" : get(lineItem, ["Sale", "LineItemAssociation", "ChildBusinessDate"]),
            "ChildRetailLocationId" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailLocationId"]),
          },
          "Description" : get(lineItem, ["Sale", "Description"]),
          "RegularSalesUnitPrice" : get(lineItem, ["Sale", "RegularSalesUnitPrice"]),
          "Quantity" : get(lineItem, ["Sale", "Quantity"]),
          "PercentageOfItem" : {
            "Percentage" : get(lineItem, ["Sale", "PercentageOfItem", "Percentage"]),
            "AssociateID" : get(lineItem, ["Sale", "PercentageOfItem", "AssociateID"])
          },
          "ScannedItemID" : get(lineItem, ["Sale", "ScannedItemID"]),
          "ExtendedAmount" : get(lineItem, ["Sale", "ExtendedAmount"]),
          "Tax" : {
            "TaxableAmount" : get(lineItem, ["Sale", "Tax", "TaxableAmount"]),
            "TaxLocationId" : get(lineItem, ["Sale", "Tax", "TaxLocationId"]),
            "Amount" : get(lineItem, ["Sale", "Tax", "Amount"]),
            "TaxGroupId" : get(lineItem, ["Sale", "Tax", "TaxGroupId"]),
            "Percent" : get(lineItem, ["Sale", "Tax", "Percent"]),
            "TaxAuthority" : get(lineItem, ["Sale", "Tax", "TaxAuthority"])
          },
          "Associate" : {
            "AssociateID" : get(lineItem, ["Sale", "Associate", "AssociateID"])
          }
        }
    });
}
}
else{
  var lineItem = null;
  retailTransaction.LineItem.push({
    "EndDateTime" : get(lineItem, ["EndDateTime"]),
    "SequenceNumber" : get(lineItem,["SequenceNumber"]),
    "BeginDateTime" : get(lineItem,["BeginDateTime"]),
    "Tax" : {
      "TaxGroupId" : get(lineItem, ["Tax", "TaxGroupId"]),
      "TaxLocationId" : get(lineItem, ["Tax", "TaxLocationId"]),
      "Amount" : get(lineItem, ["Tax", "Amount"]),
      "TaxableAmount" : get(lineItem, ["Tax", "TaxableAmount"]),
      "TaxAuthority" : get(lineItem, ["Tax", "TaxAuthority"]),
      "Percent" : get(lineItem, ["Tax", "Percent"])
    },
    "Discount" : {
      "Rounding" : get(lineItem, ["Discount", "Rounding"]),
      "DiscountId" : get(lineItem, ["Discount", "DiscountId"]),
      "Amount" : get(lineItem, ["Discount","Amount"])
    },
    "Coupon" : {
      "CouponId" : get(lineItem, ["Coupon", "CouponId"])
    },
    "Tender" : {
      "CreditDebit" : {
        "HashedCardNumber" : get(lineItem, ["Tender", "CreditDebit", "HashedCardNumber"]),
        "ReconciliationCode" : get(lineItem, ["Tender", "CreditDebit", "ReconciliationCode"]),
        "ExpirationDateEncrypted" : get(lineItem, ["Tender", "CreditDebit", "ExpirationDateEncrypted"]),
        "AuthorizationToken" : get(lineItem, ["Tender", "CreditDebit", "AuthorizationToken"]),
        "PrimaryAccountNumber" : get(lineItem, ["Tender", "CreditDebit", "PrimaryAccountNumber"]),
        "MaskedCardNumber" : get(lineItem, ["Tender", "CreditDebit", "MaskedCardNumber"])
      },
      "Voucher" : {
        "Description" : get(lineItem, ["Tender", "Voucher", "Description"]),
        "FaceValueAmount" : get(lineItem, ["Tender", "Voucher", "FaceValueAmount"]),
        "CardNumber" : get(lineItem, ["Tender", "Voucher", "CardNumber"]),
        "UnspentAmount" : get(lineItem, ["Tender", "Voucher", "UnspentAmount"])
      },
      "Amount" : get(lineItem, ["Tender", "Amount"]),
      "Check" : {
        "CheckNumber" : get(lineItem, ["Tender", "Check", "CheckNumber"])
      },
      "SerialNumber" : get(lineItem, ["Tender", "SerialNumber"]),
      //"LineItemProperty" : get(lineItem, ["Tender", "LineItemProperty"]),
      "LineItemProperty" : returnArr(get(lineItem, ["Tender", "LineItemProperty"]), ["LineItemPropertyValue", "LineItemPropertyCode"]),

      "Authorization" : {
        "AuthorizationDateTime" : get(lineItem, ["Tender", "Authorization", "AuthorizationDateTime"]),
        "AdjudicationCode" : get(lineItem, ["Tender", "Authorization", "AdjudicationCode"]),
        "AuthorizationCode" : get(lineItem, ["Tender", "Authorization", "AuthorizationCode"]),
        "ReferenceNumber" : get(lineItem, ["Tender", "Authorization", "ReferenceNumber"]),
        "Discount" : get(lineItem, ["Tender", "Authorization", "Discount"]),
        "Tax" : get(lineItem, ["Tender", "Authorization", "Tax"]),
        "Freight" : get(lineItem, ["Tender", "Authorization", "Freight"]),
        "Duty" : get(lineItem, ["Tender", "Authorization", "Duty"]),
        "RequestedAmount" : get(lineItem, ["Tender", "Authorization", "RequestedAmount"])
      },

      "TenderID" : get(lineItem, ["Tender", "TenderID"])
    },
      "Return" : {
        "ExtendedAmount" : get(lineItem, ["Return", "ExtendedAmount"]),
        "Quantity" : get(lineItem, ["Return", "Quantity"]),
        "TransactionLink" : {
          "LineItemSequenceNumber" : get(lineItem, ["Return", "TransactionLink", "LineItemSequenceNumber"]),
          "WorkstationID" : get(lineItem, ["Return", "TransactionLink", "WorkstationID"]),
          "BusinessDayDate" : get(lineItem, ["Return", "TransactionLink", "BusinessDayDate"]),
          "SequenceNumber" : get(lineItem, ["Return", "TransactionLink", "SequenceNumber"]),
          "RetailStoreID" : get(lineItem, ["Return", "TransactionLink", "RetailStoreID"])
        },
        "ItemID" : get(lineItem, ["Return", "ItemID"]),
        "Associate" : {
          "AssociateID" : get(lineItem, ["Return", "Associate", "AssociateID"])
        },
        "Reason" : get(lineItem, ["Return", "Reason"]),
        "Description" : get(lineItem, ["Return", "Description"]),
        "ActualSalesUnitPrice" : get(lineItem, ["Return", "ActualSalesUnitPrice"]),
        "RegularSalesUnitPrice" : get(lineItem, ["Return", "RegularSalesUnitPrice"]),
        "Tax" : {
          "TaxableAmount" : get(lineItem, ["Return", "Tax", "TaxableAmount"]),
          "TaxOverride" : {
            "ReasonCode" : get(lineItem, ["Return", "Tax", "TaxOverride", "ReasonCode"]),
            "NewTaxPercent" : get(lineItem, ["Return", "Tax", "TaxOverride", "NewTaxPercent"]),
            "OriginalTaxPercent" : get(lineItem, ["Return", "Tax", "TaxOverride", "OriginalTaxPercent"]),
            "NewTaxAmount" : get(lineItem, ["Return", "Tax", "TaxOverride", "NewTaxAmount"]),
            "OriginalTaxAmount" : get(lineItem, ["Return", "Tax", "TaxOverride", "OriginalTaxAmount"])
          },
          "Percent" : get(lineItem, ["Return", "Tax", "Percent"]),
          "TaxGroupId" : get(lineItem, ["Return", "Tax", "TaxGroupId"]),
          "TaxAuthority" : get(lineItem, ["Return", "Tax", "TaxAuthority"]),
          "TaxLocationId" : get(lineItem, ["Return", "Tax", "TaxLocationId"]),
          "Amount" : get(lineItem, ["Return", "Tax", "Amount"])
        },
        "Disposition" : get(lineItem, ["Return", "Disposition"]),
        "PercentageOfItem" : {
          "AssociateID" : get(lineItem, ["Return", "PercentageOfItem", "AssociateID"]),
          "Percentage" : get(lineItem, ["Return", "PercentageOfItem", "Percentage"])
        },
        "Disposal" : get(lineItem, ["Return", "Disposal"]),
        "ReturnType" : get(lineItem, ["Return", "ReturnType"]),
        //"RetailPriceModifier" : get(lineItem, ["Return", "RetailPriceModifier"]),
        "RetailPriceModifier" : returnArr(get(lineItem, ["Return", "RetailPriceModifier"]), [ "PreviousPrice", "Amount", "SequenceNumber", "ReasonCode", "DiscountReasonCode", "NewPrice"]),

      },
      "Sale" : {
        "ActualSalesUnitPrice" : get(lineItem, ["Sale", "ActualSalesUnitPrice"]),
        "SerialNumber" : get(lineItem, ["Sale", "SerialNumber"]),
        //"RetailPriceModifier" : get(lineItem, ["Sale", "RetailPriceModifier"]),
        "RetailPriceModifier" : returnArr(get(lineItem, ["Sale", "RetailPriceModifier"]), ["ReasonCode", "PromotionID","Amount","SequenceNumber","SerialNumber","Coupon,ScanCode"]),

        "ItemID" : get(lineItem, ["Sale", "ItemID"]),
        "GiftReceiptFlag" : get(lineItem, ["Sale", "GiftReceiptFlag"]),
        "LineItemAssociation" : {
          "ChildRetailTransactionLineItemSequence" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailTransactionLineItemSequence"]),
          "ChildTransactionSequence" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailTransactionSequence"]),
          "ChildWorkstationId" : get(lineItem, ["Sale", "LineItemAssociation", "ChildWorkstationId"]),
          "LineItemAssociationTypeCodeString" : get(lineItem, ["Sale", "LineItemAssociation", "LineItemAssociationTypeCodeString"]),
          "LineItemAssociationModifierSequence" : get(lineItem, ["Sale", "LineItemAssociation", "LineItemAssociationModifierSequence"]),
          "ChildBusinessDate" : get(lineItem, ["Sale", "LineItemAssociation", "ChildBusinessDate"]),
          "ChildRetailLocationId" : get(lineItem, ["Sale", "LineItemAssociation", "ChildRetailLocationId"]),
        },
        "Description" : get(lineItem, ["Sale", "Description"]),
        "RegularSalesUnitPrice" : get(lineItem, ["Sale", "RegularSalesUnitPrice"]),
        "Quantity" : get(lineItem, ["Sale", "Quantity"]),
        "PercentageOfItem" : {
          "Percentage" : get(lineItem, ["Sale", "PercentageOfItem", "Percentage"]),
          "AssociateID" : get(lineItem, ["Sale", "PercentageOfItem", "AssociateID"])
        },
        "ScannedItemID" : get(lineItem, ["Sale", "ScannedItemID"]),
        "ExtendedAmount" : get(lineItem, ["Sale", "ExtendedAmount"]),
        "Tax" : {
          "TaxableAmount" : get(lineItem, ["Sale", "Tax", "TaxableAmount"]),
          "TaxLocationId" : get(lineItem, ["Sale", "Tax", "TaxLocationId"]),
          "Amount" : get(lineItem, ["Sale", "Tax", "Amount"]),
          "TaxGroupId" : get(lineItem, ["Sale", "Tax", "TaxGroupId"]),
          "Percent" : get(lineItem, ["Sale", "Tax", "Percent"]),
          "TaxAuthority" : get(lineItem, ["Sale", "Tax", "TaxAuthority"])
        },
        "Associate" : {
          "AssociateID" : get(lineItem, ["Sale", "Associate", "AssociateID"])
        }
      }
  });
}

  return retailTransaction;
}



var tmp = get({"abs" : [{"dcs" : {"ooo" : "ooo"}, "ooo": "wef"}, {"dcs" : {"ooo" : "hgf"}},{"oij" : "kkk"}]}, ["abs"]);
//console.log(tmp);
//console.log(returnArr(tmp, ["dcs,ooo"]));
function extract(pubSubMessageJson){
  //var pubSubMessageJson = JSON.parse(pubSubMessageString);
  var processedJson = {};
  processedJson.SequenceNumber = get(pubSubMessageJson, ["SequenceNumber"]);
  processedJson.EndDateTime = get(pubSubMessageJson, ["EndDateTime"]);
  processedJson.BusinessDayDate = get(pubSubMessageJson, ["BusinessDayDate"]);
  processedJson.RetailTransaction = retailTransactionProcessor(get(pubSubMessageJson,["RetailTransaction"]));

  processedJson.TillID = get(pubSubMessageJson,["TillID"]);
  processedJson.OperatorID = get(pubSubMessageJson,["OperatorID"]);
  processedJson.RetailStoreID = get(pubSubMessageJson,["RetailStoreID"]);
  //processedJson.PosTransactionProperties = get(pubSubMessageJson,["PosTransactionProperties"]);
  processedJson.PosTransactionProperties = returnArr(get(pubSubMessageJson, ["PosTransactionProperties"]), ["PosTransactionPropertyValue", "PosTransactionPropertyCode"]);


  processedJson.BeginDateTime = get(pubSubMessageJson,["BeginDateTime"]);
  processedJson.CustomerID = get(pubSubMessageJson, ["CustomerID"]);
  processedJson.WorkstationID = get(pubSubMessageJson, ["WorkstationID"]);
  processedJson.CurrencyCode = get(pubSubMessageJson, ["CurrencyCode"]);
  processedJson.TransactionID = get(pubSubMessageJson, ["TransactionID"]);


  //"BeginDateTime", "CustomerID", "WorkstationID", "CurrencyCode", "TransactionID"
  //return JSON.stringify(processedJson);
  return processedJson["RetailTransaction"]["LineItem"];
}

result = extract(sample);
console.log(result);


//console.log("Hello World");

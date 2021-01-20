var sample = {"RetailStoreID": "219", "WorkstationID": "1", "TillID": "219001000518", "SequenceNumber": "30856",
"BusinessDayDate": "2020-09-18", "BeginDateTime": "2020-09-22T12:22:48.774", "EndDateTime": "2020-09-23T09:34:04.723",
"OperatorID": "5", "CurrencyCode": "USD", "RetailTransaction": {"LineItem": [{"SequenceNumber": "1", "BeginDateTime": "2020-09-22T12:26:43.655",
 "EndDateTime": "2020-09-22T12:26:43.707", "Sale": {"ItemID": "83931800052", "Description": "1 + 1 = 3 Cava Brut", "RegularSalesUnitPrice": "16.49",
 "ActualSalesUnitPrice": "16.49", "ExtendedAmount": "16.49", "Quantity": "1", "ScannedItemID": "83931800052", "GiftReceiptFlag": "false",
 "Associate": {"AssociateID": "5"}, "PercentageOfItem": {"AssociateID": "5", "Percentage": "1"}, "Tax": {"TaxAuthority": "TA-VA-219-N",
 "Amount": "0.0000000", "TaxLocationId": "GR-VA-219", "TaxGroupId": "1"}}}], "RoundedTotal": "0.00",
 "CustomerAccount": {"LoyaltyAccount": {"LoyaltyAccountID": "8325268168958"}},
 "Customer": {"Name": "Johnny Smith", "ActiveFlag": "true", "Address": {"AddressLine": "123 HOME", "City": "VB", "State": "VA", "PostalCode": "12345"},
 "eMail": "wineshop1@gmail.com", "AccountNumber": "3263030", "AlternateKey": [{"AlternateID": "205022000003"}, {"AlternateID": "3263030"}]}},
 "TransactionID": "00219000012020091800030856"};

//var sample = {"RetailTransaction": {"LineItem" : [{"Sale" : {"RetailPriceModifier" : [{"Amount" : 50, "Coupon" : {"ScanCode" : "111"}}]}}]}};

//result["RetailTransaction"]["LineItem"]["Tender"]
function returnArr(array, keys){
  if(array == null ) return [];
  var returnArray = [];

//keys = ["LineItemPropertyValue", "LineItemPropertyCode"]

  for(i = 0; i < array.length; i++){
    var tempArr = array[i];
    var tempDict = {};
    for(i = 0; i < keys.length; i++){
      //console.log(key);
      //var obj = {};
      var key = keys[i];
      console.log(typeof key);
      tempDict[key] = get(tempArr, [key]);
  }
    returnArray.push(tempDict);
  }

  return returnArray;
}



// Also need to figure out a systematic way to only access if it exists, otherwise set it to null;


function retailTransactionProcessor(rt){
  var retailTransaction = {};
  retailTransaction.RoundedTotal = get(rt, ["RoundedTotal"]);
  retailTransaction.CustomerAccount = get(rt, ["CustomerAccount"]);

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
        /*
        "LineItemProperty" : [{
          "LineItemPropertyValue" : null,
          "LineItemPropertyCode" : null
        }],
        for(i = 0; i < lineItem["Tender"]["LineItemProperty"].length; i++){
          "LineItemProperty".push({
            "LineItemPropertyValue" : lineItem["Tender"]["LineItemProperty"][i]["LineItemPropertyValue"],
            "LineItemPropertyCode" : lineItem["Tender"]["LineItemProperty"][i]["LineItemPropertyCode"]
          });
        }*/



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

          /*
          "RetailPriceModifier" : [],
          for(i = 0; i < lineItem["Return"]["RetailPriceModifier"].length; i++){
            "RetailPriceModifier".push({
              "PreviousPrice" : lineItem["Return"]["RetailPriceModifier"][i]["PreviousPrice"],
              "Amount" : lineItem["Return"]["RetailPriceModifier"][i]["Amount"],
              "SequenceNumber" : lineItem["Return"]["RetailPriceModifier"][i]["SequenceNumber"],
              "ReasonCode" : lineItem["Return"]["RetailPriceModifier"][i]["ReasonCode"],
              "DiscountReasonCode" : lineItem["Return"]["RetailPriceModifier"][i]["DiscountReasonCode"],
              "NewPrice" : lineItem["Return"]["RetailPriceModifier"][i]["NewPrice"]
            });
          }*/
        },
        "Sale" : {
          "ActualSalesUnitPrice" : get(lineItem, ["Sale", "ActualSalesUnitPrice"]),
          "SerialNumber" : get(lineItem, ["Sale", "SerialNumber"]),
          //"RetailPriceModifier" : get(lineItem, ["Sale", "RetailPriceModifier"]),
          "RetailPriceModifier" : returnArr(get(lineItem, ["Sale", "RetailPriceModifier"]), ["ReasonCode", "PromotionID","Amount","SequenceNumber","SerialNumber","Coupon"]),
          /*
          "RetailPriceModifier" : [],
          for(i = 0; i < lineItem["Sale"]["RetailPriceModifier"].length; i++){
            "RetailPriceModifier".push({
              "ReasonCode" : lineItem["Sale"]["RetailPriceModifier"][i]["ReasonCode"],
              "PromotionID" : lineItem["Sale"]["RetailPriceModifier"][i]["PromotionID"],
              "Amount" : lineItem["Sale"]["RetailPriceModifier"][i]["Amount"],
              "SequenceNumber" : lineItem["Sale"]["RetailPriceModifier"][i]["SequenceNumber"],
              "SerialNumber" : lineItem["Sale"]["RetailPriceModifier"][i]["SerialNumber"],
              "Coupon" : {
                "ScanCode" : lineItem["Sale"]["RetailPriceModifier"][i]["Coupon"]["ScanCode"]
              }
            });
          }*/

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

function get(object, keyList) {
    //var keyList = key.split(".");
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

/*
function addKey(pubSubMessageJson, keyList){
  var processedJson = {};
  for(key in keyList){
    if(typeof key == "string"){
      processedJson.key = get(pubSubMessageJson, key);
    }
    else{

    }
  }
}
*/

function extract(pubSubMessageJson){
  //var pubSubMessageJson = JSON.parse(pubSubMessageString);
  var processedJson = {};
  processedJson.SequenceNumber = get(pubSubMessageJson, ["SequenceNumber"]);
  processedJson.EndDateTime = get(pubSubMessageJson, ["EndDateTime"]);
  processedJson.BusinessDayDate = get(pubSubMessageJson, ["BusinessDayDate"]);
  processedJson.RetailTransaction = retailTransactionProcessor(pubSubMessageJson["RetailTransaction"]);

  processedJson.TillID = get(pubSubMessageJson,["TillID"]);
  processedJson.OperatorID = get(pubSubMessageJson,["OperatorID"]);
  processedJson.RetailStoreID = get(pubSubMessageJson,["RetailStoreID"]);
  processedJson.PosTransactionProperties = get(pubSubMessageJson,["PosTransactionProperties"]);


  //processedJson.PosTransactionProperties = get(pubSubMessageJson,["PosTransactionProperties"]);
  /*
  if(typeof pubSubMessageJson["PosTransactionProperties"] !== "undefined"){
  for(i = 0; i < pubSubMessageJson["PosTransactionProperties"].length; i++){
    processedJson.PosTransactionProperties.push({
      "PosTransactionPropertyValue" : pubSubMessageJson["PosTransactionProperties"][i]["PosTransactionPropertyValue"],
      "PosTransactionPropertyCode" : pubSubMessageJson["PosTransactionProperties"][i]["PosTransactionPropertyCode"]
    });
  }
}
else{
  processedJson.PosTransactionProperties.push({
    "PosTransactionPropertyValue" : null,
    "PosTransactionPropertyCode" : null
  });
  */
  processedJson.BeginDateTime = get(pubSubMessageJson,["BeginDateTime"]);
  processedJson.CustomerID = get(pubSubMessageJson, ["CustomerID"]);
  processedJson.WorkstationID = get(pubSubMessageJson, ["WorkstationID"]);
  processedJson.CurrencyCode = get(pubSubMessageJson, ["CurrencyCode"]);
  processedJson.TransactionID = get(pubSubMessageJson, ["TransactionID"]);


  //"BeginDateTime", "CustomerID", "WorkstationID", "CurrencyCode", "TransactionID"
  //return JSON.stringify(processedJson);
  return processedJson;
}

result = extract(sample);
console.log(result);


//console.log("Hello World");

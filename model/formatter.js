sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},

		getTableMode: function(sMode, sStatus) {
			if (sMode) {
				if ((sMode === "edit" || sMode === "create") && sStatus !== "REQ_SUBMIT" && sStatus !== "REQ_APPR" && sStatus !== "REQ_REJECT") {
					return "Delete";
				} else {
					return "None";
				}
			} else {
				return "None";
			}
		},

		getDetailViewTitle: function(sZreqid, sNewTitle) {
			if (sZreqid) {
				return sZreqid;
			} else {
				return sNewTitle;
			}
		},

		buildFileGetUrl: function(sZreqid, sZsequence) {
			return "/sap/opu/odata/sap/ZFI_AP_INVOICE_SRV/InvoiceAttachmentsSet(Zreqid=\'" + sZreqid + "\',Zsequence=" + sZsequence + ")/$value";
		},

		removeLeadingZeroes: function(sValue) {
			return parseInt(sValue, 10);

		},

		isEditable: function(sStatus, sMode) {
			if (sMode) {
				if ((sMode === "edit" || sMode === "create") && sStatus !== "REQ_SUBMIT" && sStatus !== "REQ_APPR" && sStatus !== "REQ_REJECT") {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		lineItemEnableFormatter : function(sStatus,sMode) {
			
		},
		
		getDateAndTime: function(sDateTime) {

			if (sDateTime) {
				var dateTime = sDateTime.slice(6, 10);
				var finalDateTime = dateTime.concat(".", sDateTime.slice(4, 6), ".", sDateTime.slice(2, 4), " ", sDateTime.slice(10, 12), ":", sDateTime.slice(12, 14),
					":", sDateTime.slice(14, 16));
					
				return finalDateTime;
			} else {
				return "";
			}
		}		
	};

});
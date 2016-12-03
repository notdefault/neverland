# Neverland #
_Neverland is home to lost boys like me;_
_Lost boys like me are free._

## About ##
This project aims to supply an HTML5/JS responsive application that sources data from community driven (government based) animal adoption websites. I saw a severe lacking need in the UI for pet adoptions, and feel a potential for increase in adoption rate if mobile web is used and UX is enhanced. 

## Current Features ##
  * Initial scaffolding and documentation!
  * Oh right, features? None of those yet...


## Project Scope / Goals ##
  * Scrape [OCAS Web](http://apps.ocfl.net/dept/CEsrvcs/animal/NetPets/Overall.asp?NN=1&AT=D)
  * Build UI (See dox/Wireframes)
  * Add Secondary Source as Model
  * Bug Fix
  * RC / Bug Documentation
  * P Release

## Requirements ##
_-----EDIT THIS-----_
  - [Git](https://git-scm.com/)
  - [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
  - [Bower](bower.io) (`npm install --global bower`)
  - [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
  - [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`


## Installation ##

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.



## Development Environment Setup ##
_NEEDS Edits_

## Development Work-flow ##

  1. Launch development server

```bash
npm start
```

  2. Make changes (reflected live in browser)

  3. Run unit tests

```bash
gulp test
```

  4. Commit changes

## Deployment ##

  1. Run build scripts

```bash
gulp build
```
  2. Serve compiled, production-ready files from the 'dist' directory

```bash
gulp serve:dist
```

## General Notes ##

  * All Javascript code should be formatted according to the NPM style guide
		- https://npmjs.org/doc/coding-style.html

	* All code editors should be equipped with an editorConfig plugin to ensure
	  all code is spaced/formatted identically across editors
		- http://editorconfig.org/

	* Please commit and push as often as possible. The more frequently you commit
	  the easier it is to revert or cherry pick changes when things break.
	
	* When commiting experimental or incomplete features/experiments please do
	  so in a branch, and merge develop into your branch frequently to avoid 
		long merge conflicts later.

	* Please only commit code that is yours. If you did not write it, it probably
	  belongs in component.json or package.json to be handeled and version
		controlled via bower or npm. If it exists, it is probably in the npm or
		bower repos and even if it does not, bower and npm both support linking in
		and tracking remote git repositories.

  * When making changes to dependencies (npm/bower) please do so in a separate
		commit to call attention to it so other team members know to do a new npm
		install or bower install.

	* Please use the Angular $log functions instead of console.log to allow more
	  granular logging controls without polluting the global unit test and
		production logs

	* Wherever possible please conform all CSS/HTML by Googles Style guide
		with the addition of making use of less mixins and nesting where possible.
		- http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml

## Localization Notes (i18N) ##
## __----- EDIT THIS -----__ ##
	Locales will be store in the database in the languages table. Unfortunately, that table isn't normalized sufficiently so bare with it or get chewed.

	Naming Convention

		Category or Section
		Please categorize (section) locales in order to allow for duplicate target (if needed) but also for self documentation. Ensure that the section or category you are creating makes the most sense. Determine if the locale entry you are creating can be placed in a more generalized section. 

			Ex: Instead of creating a BillingForm section consider a FormSection. It may be that locale entries in the billing form can be used in the shipping form (e.g. first name, last name, etc).

		Use a more specific category name when you are certain at the time of development that locale entries will reside only in that section or view of the application.

			Ex: PacakageListView.pageTitle, PackageListView.pageDescription

		Category or section names must be in the form of CamelCaps.

			Bad Examples:
				mysectionname, mySectionName, my_section_name, my-section-name, MYSECTIONNAME, MY-SECTION-NAME, MY_SECTION_NAME

			Valid Examples:
				MySectionName, MyCategoryName, Forms, BillingView

		Target
		Target must be in the form of camelCase.

			Bad Examples:
				mytargetname, MyTargetName, my_target_name, my-target-name, MYTARGETNAME, MY-TARGET-NAME, MY_TARGET_NAME

			Valid Examples:
				myTargetName, minQtyError, invalidEmail, lessThanMinQtyError

		Use error codes for errors but use descriptive target names for non-errors.

			Bad Examples:
				For first name label: fn, fnLbl, fName, first

			Valid Examples:
				For first name label: firstName, firstNameLabel, firstNameLbl
				
				In this particular case, firstName is the recommended approach.

		Dynamic Values
			At times we will need to customize the error message with information unknown until runtime. 

			Example Requirement: Display the difference of items attempted to be added to the cart and package's min quantity (i.e. if package has a min qty of 10 and user attempts to add 8, error message should say you have to add at least 2 more). Ensure that words are singular or plural based on context.

			Please note that this is just an example and I don't think we would ever display the minQtyError as below.

			Section: Alert
			Target: lessThanMinQtyError
			Value: This package has a minimum quantity of @@pkgMinQty @@[pkgMinQty, item, items]. You are attempting to add @@qtyAttempted @@[qtyAttempted, item, items] to your cart. Please add at least @@difRemaining more @@[difRemaining item, items] in order to proceed.

			The application should swap out variables starting with @@someVarName with values derived at run-time. The result should be as follows:

			This package has a minimum quantity of 10 items. You are attempting to add 8 items to your cart. Please add at least 2 more items in order to proceed.

			Or if it were 10 min qty and adding 9
			This package has a minimum quantity of 10 items. You are attempting to add 9 items to your cart. Please add at least 1 more item in order to proceed.

			NOTE: item is plural in first example and singular in second.
			Re: @@[value, item, items] - Singular and plural options. Select the more sensible option based on values derived elsewhere in the string.


		Other Notes
			Add your locale entries in the language service as default values.

			To verify the application is localized in its entirety, comment out the default values and ensure all text entries are not set to undefined.
			
			The entire application is wrapped in ApplicationController and i18n is defined in ApplicationController scope Simply refer to your locale entries as {{i18n.Alert.addDonationErrorMsg}} for instance, in your views or business logic. In other words, no need to import language service in any controllers other than the ApplicationController.

			Upon completion of the requirement, please write and execute the SQL required to add the entries to the locale table. 
			
			Save all your SQL. It will be used for updating staging and prod database.

## URL Paramaters ##
~~### v (version) ###~~
- ~~Specifies a specific GIT branch or tag  name or to serve from and over-rides the merchant paramater if provided.~~

## Code Formatting Examples ##
_If you don't supply pretty javascript that I can read, I'll reject it._

No
```javascript
$scope.decrementQty = function (data) {}
```

Yes
```javascript
$scope.decrementQty = function(data){}
```

No
```javascript
//this is a random comment
```

Yes (note space after slashes, propper case, and period)
```javascript
// This is a random comment.
```

No
```javascript
if (detail == $scope.buttonFlags.YES) {}
if ( detail == $scope.buttonFlags.YES ) {}
```

Yes
```javascript
if(detail == $scope.buttonFlags.YES){}
```

No
```javascript
$scope.showModal(
	{ title: $scope.i18n.Alert.failedPurchaseTitle, description: $scope.i18n.Alert.failedPurchaseMsg, flags: [$scope.buttonFlags.YES, $scope.buttonFlags.NO], callback: function (detail) {
		if (detail == $scope.buttonFlags.YES) {
			$scope.completeOrder()
		}
	}
	}
)
```

Yes
```javascript
$scope.showModal(
{ title: $scope.i18n.Alert.failedPurchaseTitle
, description: $scope.i18n.Alert.failedPurchaseMsg
, flags: [$scope.buttonFlags.YES
, $scope.buttonFlags.NO]
, callback: function(detail){
		if(detail == $scope.buttonFlags.YES){
			$scope.completeOrder()
		}
	}
})
```

No
```javascript
var customer =
{ f_name: savedBilling.firstName, m_name: '', l_name: savedBilling.lastName, phone: savedBilling.phone, mobile_phone: '', email: savedBilling.email
}
```

Yes
```javascript
var customer =
{ f_name: savedBilling.firstName
, m_name: ''
, l_name: savedBilling.lastName
, phone: savedBilling.phone
, mobile_phone: ''
, email: savedBilling.email
}
```

No
```javascript
if(){
	
}else if(){
	
}else{
	
}
```


Yes
```javascript
if(){
	
} else if(){
	
} else {}
```

No
```javascript
if(){
	
}
if(){
	
}
function foo(){
	
}
for(var i = 0; i < 10; i++){
	
}
```

Yes (they are different statements - treat it as such)
```javascript
if(){
	
}

if(){
	
}

function foo(){
	
}

for(var i = 0; i < 10; i++){
	
}
```

No
```javascript
for ( var i = 0; i < 10; i++ ) {
	
}

if () {
	
}

function foo () {
	
}
```

Yes
```javascript
for(var i = 0; i < 10; i++){
	
}

if(){
	
}

function foo(){
	
}
```

No
```javascript
var someVar = (someValue==someBool)?someOtherValue:yetSomeOtherValue
```

Yes
```javascript
var someVar = (someValue == someBool) ? someOtherValue : yetSomeOtherValue
```
No
```javascript
var getObject = function (name) {
	switch (name[0]) {
		case '#':
			var value = value1
			break;
		case '.':
			var value = value2
			break;
		default:
			var value = value3
			break;
	}
	return value;
}
```

Yes
```javascript
var getObject = function(name){
	switch(name[0]){
		case '#':
			return value1
		case '.':
			return value2
		default:
			return value3
	}

	return null
}
```

OR 
```javascript
var getObject = function(name){
	var value
	switch(name[0]){
		case '#':
			value = value1
			break
		case '.':
			value = value2
			break
		default:
			value = value3
			break
	}

	return value
}
```

No
```javascript
$scope.showModal
({ title: $scope.i18n.updateMultipleLocaleKeysInArray
		(['qtyAdded']
			, [qtyAdded]
			, $scope.i18n.replaceAllMultiple
			(['@@qtyAdded']
				, [qtyAdded]
				, $scope.i18n.Alert.cartOrContinueShoppingTitle
			)
		), description: '', flags: [ $scope.buttonFlags.CONTINUE_SHOPPING
		, $scope.buttonFlags.PROCEED_TO_CHECKOUT
	], callback: function(detail){
		if(detail == $scope.buttonFlags.CONTINUE_SHOPPING){
			$scope.routeToPackageList();
		} else if(detail == $scope.buttonFlags.PROCEED_TO_CHECKOUT){
			$scope.routeTo($scope.routes.CART)
		}
	}
	}
)
```

Yes (although more verbose, it's more legible)
```javascript
var title = $scope.i18n.replaceAllMultiple(['@@qtyAdded'], [qtyAdded], $scope.i18n.Alert.cartOrContinueShoppingTitle)
title = $scope.i18n.updateMultipleLocaleKeysInArray(['qtyAdded'], [qtyAdded], title)
$scope.showModal
(
	{ title: title
	, description: ''
	, flags:
		[ $scope.buttonFlags.CONTINUE_SHOPPING
		, $scope.buttonFlags.PROCEED_TO_CHECKOUT
		]
	, callback: function(detail){
			if(detail == $scope.buttonFlags.CONTINUE_SHOPPING){
				$scope.routeToPackageList();
			} else if(detail == $scope.buttonFlags.PROCEED_TO_CHECKOUT){
				$scope.routeTo($scope.routes.CART)
			}
		}
	}
)
```

No
```javascript
packagesData.funcName = function(){

	$log.log('log something')


}
```

Yes (What is the deal with all the line breaks?)
```javascript
packagesData.funcName = function(){
	$log.log('log something')
}
```

### No ###
```javascript
packagesData.funcName = function(){
	$log.log('log something')
	$log.log('************************ log something else ****************************************')
	$log.log('log something again')
	
	$log.log('SOME FUNCTION STARTS HERE')
	$log.log('THIS IS THE MIDDLE OF THE FUNCTION')
	$log.log('FUNCTION IS ABOUT TO END')
	$log.log('WAIT FOR IT')
	$log.log('WAIT FOR IT')
	$log.log('WAIT FOR IT')
	$log.log('FUNCTION ENDED')
	
	$log.log('<<<<<<<<<<<<<<<<<<<<<<<<<< I love logging >>>>>>>>>>>>>>>>>>>>>>>>>>>')
	
	$log.log('########################################################################')
	$log.log('######### THIS IS REALLY IMPORTANT - I LOVE CUTE ANIMALS ###############')
	$log.log('########################################################################')
}
```

### Yes ###
```javascript
packagesData.funcName = function(){
	// Remove excessive logging - it makes the code confusing.
	// Use logging as a temporary means but delete it when you're done with it. It should be used sparingly.
	// Excessive logging makes logging irrelevant and makes necessary logging hard to read.
	// Use Chrome's debugger and add breakpoints.
}
```
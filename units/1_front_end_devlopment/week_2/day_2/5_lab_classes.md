![General Assembly](https://logo.clearbit.com/generalassemb.ly/?size=100)
<img src="https://i.imgur.com/VAIePkt.jpg" width="900">

# Lab - Classes

## Create the following objects

1. Create a class for a Pet

   - attributes
     - owner - string
     - name - string
     - walk - a method that logs 'walka walka'
   - instantiating a new pet takes the pets name as a parameter and sets the attribute;
   - create one pet and log it
   - run the walk method to make sure it works as expected

1. Create a class for a Dog
   - this should inherit from Pet
   - attributes
     - price - 20
   - methods
     - bark() - log "bark"
     - chaseTail() - log "oh boy oh boy oh boy"
     - getPrice() - return price
   - create a new dog and log it
   - test all the methods to make sure they work as expected

1) Create a class for a Cat

   - this should inherit from Pet
   - attributes
     - price - 10
   - methods
     - purr() - log "purrrrr"
     - clean() - log "cleaning"
     - getPrice() - return price
     - walk() - overwrite the method to console.log 'strut strut'
   - create a new cat and log it
   - test all the methods to make sure they work as expected

1) update one property of the dog after it has been created and log it to check
1) updated one property of the cat after it has been creatd and log it to check

---
## JS Classes - Lab Part 2

In this lab, you will choose one of the object hierarchies below, **Bank Accounts** or **People**, and write the classes to implement it.

### Bank Accounts

**`BankAccount`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `ownerName`, `balance`, `acctNum` (generated in constructor - not passed in) | `deposit`, `withdraw` |

**`CheckingAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | `overdraftEnabled` |  Override `withdraw` to implement overdraft feature |

**`SavingsAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | None |  Override `withdraw` to disallow withdrawals completely :) |


### People

**`Person`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `firstName`, `lastName` | `sayHello` |

**`Employee`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Person` | `company`, `wage` (string), `active` (set to `true` in constructor) | `receiveRaise` (updates `wage`), `terminate` (set `active` to false) |

**`Manager`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `department` | `giveRaise` (calls `receiveRaise` on Employee object passed as arg) |

**`Worker`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `manager` (references a `Manager` object) | Your choice - be creative! |


## Deliverables

This lab is **not a deliverable**.

#### One Solution

Try not to peek, but [here's an implementation](https://repl.it/GjTg/10) of the `People` class hierarchy. 
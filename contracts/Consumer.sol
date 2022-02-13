//SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.11;

contract Consumer{
    uint256 public counter;

    function counter1() public {
        for(uint256 i; i<1000; i++){
            counter = counter+i;
        }
    }

    function counter2() public {
        uint256 j = counter;
        for(uint256 i; i<1000; i++){
            j = j+i;
        }
        counter = j;
    }

}
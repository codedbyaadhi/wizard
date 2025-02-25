import React from "react";

const Slip = () => {
  const items = [
    { qty: 1, name: "Chicken Soup", price: 45.0 },
    { qty: 2, name: "Tomato Soup", price: 15.0 },
    { qty: 1, name: "Crispy Chicken", price: 30.0 },
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cash = 200.0;
  const change = cash - total;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-gradient-to-b from-[#060514] to-[#201E37] w-[230px] h-[310px] relative shadow-md border-b-transparent">
        {/* Printer Top */}
        <div className="absolute -top-4 left-0 right-0 h-4 rounded-t-lg" />

        {/* Receipt Content */}
        <div className="p-2 font-mono text-sm">
          {/* Header */}
          <div className="flex items-center justify-center text-center mb-4 text-[#5e688f]">
            <div className="border-b border-[#42405E] w-3/5">
              <p className="font-bold">INVOICE</p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-1 mb-4 text-[#5e688f]">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="w-4">{item.qty}x</span>
                <span className="flex-1 px-2 text-[#5e688f]">{item.name}</span>
                <span className="text-right text-[#5e688f]">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-[#42405E] py-2 mb-2 text-[#8c98c8]">
            <div className="flex justify-between font-bold">
              <span>TOTAL AMOUNT</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="text-xs space-y-1 mb-4 text-[#5e688f]">
            <div className="flex justify-between">
              <span>CASH</span>
              <span>${cash.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>CHANGE</span>
              <span>${change.toFixed(2)}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2 text-[#5e688f]">
            <div className="border-t border-b border-[#42405E] py-2">
              <p className="font-bold">THANK YOU</p>
            </div>
            {/* Barcode */}
            <div className="flex items-center justify-center w-full h-8 bg-center bg-contain bg-no-repeat opacity-50" />
          </div>
        </div>
        {/* Torn Edge Effect */}
        <div className="flex items-center justify-center absolute left-0 right-0 overflow-hidden border-b-transparent">
          <div className="flex items-center justify-evenly w-full h-[10px] bg-[#1F1D36] relative top-1">
            {Array.from({ length: 7 }).map((_, idx) => {
              return (
                <div
                  className="flex w-[20px] h-[20px] rounded-full bg-[#0A0C20]"
                  key={idx}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slip;

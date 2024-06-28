import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleTakePicture = () => {
    // Navigate to the take picture page (to be implemented)
    navigate("/take-picture");
  };

  const handleScanBarcode = () => {
    // Navigate to the scan barcode page (to be implemented)
    navigate("/scan-barcode");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="space-y-8">
        <h1 className="text-4xl text-center text-white font-bold">Food Scanning Tool</h1>
        <div className="flex space-x-8">
          <Card className="w-64">
            <CardHeader>
              <CardTitle className="text-center">Take a Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={handleTakePicture} className="bg-yellow-400 hover:bg-yellow-500 text-white">
                Take Picture
              </Button>
            </CardContent>
          </Card>
          <Card className="w-64">
            <CardHeader>
              <CardTitle className="text-center">Scan Barcode</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={handleScanBarcode} className="bg-red-400 hover:bg-red-500 text-white">
                Scan Barcode
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
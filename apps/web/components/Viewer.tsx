import * as OV from "online-3d-viewer";
import React, { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  file?: File;
}

export function Viewer({ file }: ModelViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstance = useRef<any>(null);
  const [isViewerReady, setIsViewerReady] = useState(false);

  useEffect(() => {
    if (!viewerRef.current) return;

    try {
      const viewer = new OV.EmbeddedViewer(viewerRef.current, {
        backgroundColor: new OV.RGBAColor(42, 43, 47, 255),
        defaultColor: new OV.RGBColor(200, 200, 200),
      });

      viewerInstance.current = viewer;
      setIsViewerReady(true);
      console.log("3D viewer initialized and ready");
    } catch (err) {
      console.error("Error initializing viewer:", err);
    }
  }, []);

  useEffect(() => {
    if (!isViewerReady || !viewerInstance.current) return;

    if (file) {
      loadModel(file);
    } else {
      clearViewer();
    }
  }, [file, isViewerReady]);

  function loadModel(file: File) {
    try {
      if (!viewerInstance.current) {
        console.error("Viewer not initialized");
        return;
      }

      const fileList = [file];
      viewerInstance.current.LoadModelFromFileList(fileList);
    } catch (err) {
      console.error("Error loading model:", err);
    }
  }

  function clearViewer() {
    try {
      if (viewerInstance.current) {
        viewerInstance.current.Clear();
      }
    } catch (err) {
      console.error("Error clearing viewer:", err);
    }
  }

  return (
    <div className="relative h-96 w-1/2 rounded-lg bg-gray-900">
      <div className="h-full w-full" ref={viewerRef}></div>
      {!file && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg text-gray-400">No file selected</span>
        </div>
      )}
    </div>
  );
}

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

class VideoWidget extends StatefulWidget {
  const VideoWidget({super.key});

  @override
  State<VideoWidget> createState() => _VideoWidgetState();
}

class _VideoWidgetState extends State<VideoWidget> {
  late CameraController _cameraController;

  bool _isCameraInitialized = false;

  Future initCamera() async {
    List<CameraDescription> cameras = await availableCameras();

    _cameraController = CameraController(cameras[0], ResolutionPreset.max);

    try {
      await _cameraController.initialize().then((_) {
        if (!mounted) return;

        setState(() {
          _isCameraInitialized = true;
        });
      });
    } on CameraException catch (e) {
      debugPrint("Error initializing camera: $e");
    }
  }

  @override
  void initState() {
    super.initState();

    initCamera();
  }

  @override
  void dispose() {
    _cameraController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_isCameraInitialized && _cameraController.value.isInitialized) {
      return Scaffold(body: SafeArea(child: CameraPreview(_cameraController)));
    } else {
      return Scaffold(
          body: SafeArea(child: Center(child: CircularProgressIndicator())));
    }
  }
}

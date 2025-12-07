"""
Basic test for audio processing functionality
"""
import numpy as np
import librosa

def test_librosa_loading():
    """Test that librosa can load audio"""
    # Create a simple test signal
    duration = 1.0  # seconds
    sr = 16000  # sample rate
    t = np.linspace(0, duration, int(sr * duration))
    test_audio = np.sin(2 * np.pi * 440 * t)  # 440 Hz sine wave
    
    # Test MFCC extraction
    mfccs = librosa.feature.mfcc(y=test_audio, sr=sr, n_mfcc=13)
    assert mfccs.shape[0] == 13, "MFCC should have 13 coefficients"
    
    # Test tempo detection
    tempo, beats = librosa.beat.beat_track(y=test_audio, sr=sr)
    assert tempo > 0, "Tempo should be positive"
    
    print("All audio processing tests passed!")

if __name__ == "__main__":
    test_librosa_loading()


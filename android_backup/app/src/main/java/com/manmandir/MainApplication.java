// Add these imports at the top
import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;

// Inside your MainApplication class, add this method:
@Override
protected JSIModulePackage getJSIModulePackage() {
    return new ReanimatedJSIModulePackage();
}

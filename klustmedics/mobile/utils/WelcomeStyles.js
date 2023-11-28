import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  widthHeight100: {
    width: "100%",
    height: "100%",
  },
  height100: {
    height: "100%",
    width: "100%",
  },
  height45: {
    height: "45%",
  },
  width100: {
    width: "100%",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  flex1: {
    flex: 1,
  },
  white: {
    color: "#fff",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    gap: 16,
  },
  background: {
    height: "60%",
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#494949",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#494949",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "35%",
    width: "100%",
    padding: 4,
  },
  button: {
    backgroundColor: "#328ECD",
    width: "90%",
    padding: "4%",
    textAlign: "center",
    color: "#fff",
    fontWeight: "800",
    marginTop: "2%",
    fontSize: 16,
    borderRadius: 12,
  },
  // SIGNIN SPLASH
  gradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  signinLogo: {
    height: 100,
    width: 100,
  },
  signinBody: {
    position: "absolute",
    alignItems: "center",
    top: "35%",
    width: "100%",
    justifyContent: "space-between",
    height: "55%",
  },
  subSigninBody: {
    width: "100%",
    alignItems: "center",
  },
  signInLink: {
    color: "#fff",
    textDecorationLine: "underline",
    textDecorationColor: "#fff",
    textDecorationStyle: "solid",
    marginTop: 10,
  },

  //SIGNIN FORM

  signinGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signInForm: {
    // position: "absolute",
    // top: "45%",
    height: "55%",
    backgroundColor: "#28333F",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  signInFormView: {
    alignItems: "center",
    gap: 24,
    padding: 20,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  input: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 2,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 12,
    color: "#fff",
    height: 56,
  },
  placeholderContainer: {
    position: "absolute",
    top: -10,
    left: 5,
    zIndex: 5,
    backgroundColor: "#28333F",
    paddingHorizontal: 3,
  },
  placeholder: {
    fontSize: 16,
    color: "gray",
  },
});

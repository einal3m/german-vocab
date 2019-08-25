module Main exposing (..)

import Browser
import Html exposing (Html, button, div, form, h1, input, label, small, text)
import Html.Attributes exposing (class, for, id, required, type_, value)
import Html.Attributes.Aria exposing (ariaDescribedby)
import Html.Events exposing (onInput)



-- TYPES


type Msg
    = SetName String
    | SetEmail String
    | SetPassword String
    | SetPasswordConfirmation String


type FormField
    = Name
    | Email
    | Password
    | PasswordConfirmation



-- MODEL


type alias Model =
    { name : String
    , email : String
    , password : String
    , passwordConfirmation : String
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { name = ""
      , email = ""
      , password = ""
      , passwordConfirmation = ""
      }
    , Cmd.none
    )



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "row" ]
        [ div [ class "col-sm-4 offset-sm-4" ]
            [ div [ class "card" ]
                [ div [ class "card-header" ] [ text "Sign Up" ]
                , div [ class "card-body" ]
                    [ form []
                        [ div [ class "form-group" ]
                            [ label [ for "inputName" ] [ text "Name" ]
                            , input [ type_ "text", class "form-control", id "inputName", value model.name, required True, onInput SetName ] []
                            ]
                        , div [ class "form-group" ]
                            [ label [ for "inputEmail" ] [ text "Email" ]
                            , input [ type_ "text", class "form-control", id "inputEmail", value model.email, required True, onInput SetEmail ] []
                            ]
                        , div [ class "form-group" ]
                            [ label [ for "inputPassword" ] [ text "Password" ]
                            , input [ type_ "password", class "form-control", id "inputPassword", value model.password, required True, ariaDescribedby "passwordHelp", onInput SetPassword ] []
                            , small [ id "passwordHelp", class "text-muted" ] [ text "Your password must be at least 6 characters long" ]
                            ]
                        , div [ class "form-group" ]
                            [ label [ for "inputConfirmation" ] [ text "Password confirmation" ]
                            , input [ type_ "password", class "form-control", id "inputConfirmation", value model.passwordConfirmation, required True, onInput SetPasswordConfirmation ] []
                            ]
                        ]
                    ]
                , div [ class "card-footer" ] [ button [ class "btn btn-primary" ] [ text "Create Account" ] ]
                ]
            ]
        ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case Debug.log "msg" msg of
        --NoOp ->
        --    ( model, Cmd.none )
        --SubmitForm ->
        --    ( { model | response = Nothing }
        --    , Http.send Response (postRequest model)
        --    )
        SetName name ->
            ( { model | name = name }, Cmd.none )

        SetEmail email ->
            ( { model | email = email }, Cmd.none )

        SetPassword password ->
            ( { model | password = password }, Cmd.none )

        SetPasswordConfirmation passwordConfirmation ->
            ( { model | passwordConfirmation = passwordConfirmation }, Cmd.none )



--SetPassword password ->
--    ( { model | password = password }, Cmd.none )
--Response (Ok response) ->
--    ( { model | response = Just response }, Cmd.none )
--Response (Err error) ->
--    ( { model | response = Just (toString error) }, Cmd.none )
-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program (Maybe {}) Model Msg
main =
    Browser.element
        { init = always init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

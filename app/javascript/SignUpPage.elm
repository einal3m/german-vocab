module Main exposing (..)

import Browser
import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class)



-- MODEL


type alias Model =
    {}



-- INIT


init : ( Model, Cmd Message )
init =
    ( Model, Cmd.none )



-- VIEW


view : Model -> Html Message
view model =
    div []
        [ h1 [] [ text "Sign Up" ]
        , div [ class "row" ]
            [ div [ class "col-md-6 col-md-offset-3" ]
                []
            ]
        ]



-- MESSAGE


type Message
    = None



-- UPDATE


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Message
subscriptions model =
    Sub.none



-- MAIN


main : Program (Maybe {}) Model Message
main =
    Browser.element
        { init = always init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

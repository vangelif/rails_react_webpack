module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @random_greeting = Greeting.order('RANDOM()').first
        render json: @random_greeting, status: :ok
      end
    end
  end
end

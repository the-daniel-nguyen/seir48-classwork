class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new # a blank Artist template that Rails can use to create the form
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist
  end

  def show
    @artist = Artist.find params[:id]
  end

  private # this makes ALL the following methods private (so only use it at the end)
  def artist_params # strong params (see docs)
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end

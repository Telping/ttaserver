module Api
  module V1
    class JobsController < ApiController
      before_action :set_job, only: [:show, :update, :destroy]
      before_action :authenticate_user!, except:[:create]

      def index
        @jobs = Job.all
      end

      def show
        json_response(@jobs)
      end

      def create
        @job = Job.new(job_params)
        @job.save
        json_response(@job, :created)
      end

      def update
        @job.update(job_params)
        json_response(@job)
      end

      def destroy
        @job.destroy
        head :no_content
      end

      private
        def set_job
          @job = Job.find(params[:id])
        end

        def job_params
          params.permit(
            :id,
            :title,
            :description,
          )
        end
    end
  end
end
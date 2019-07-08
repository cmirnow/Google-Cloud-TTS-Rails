# -*- encoding: utf-8 -*-
# stub: google-gax 1.7.0 ruby lib

Gem::Specification.new do |s|
  s.name = "google-gax".freeze
  s.version = "1.7.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google API Authors".freeze]
  s.date = "2019-06-27"
  s.description = "Google API Extensions".freeze
  s.email = "googleapis-packages@google.com".freeze
  s.homepage = "https://github.com/googleapis/gax-ruby".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "2.7.3".freeze
  s.summary = "Aids the development of APIs for clients and servers based on GRPC and Google APIs conventions".freeze

  s.installed_by_version = "2.7.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<googleauth>.freeze, ["< 0.10.0", ">= 0.6.2"])
      s.add_runtime_dependency(%q<grpc>.freeze, ["< 2.0", ">= 1.7.2"])
      s.add_runtime_dependency(%q<googleapis-common-protos>.freeze, ["< 2.0", ">= 1.3.5"])
      s.add_runtime_dependency(%q<google-protobuf>.freeze, ["~> 3.2"])
      s.add_runtime_dependency(%q<rly>.freeze, ["~> 0.2.3"])
      s.add_development_dependency(%q<codecov>.freeze, ["~> 0.1"])
      s.add_development_dependency(%q<rake>.freeze, [">= 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<rubocop>.freeze, ["= 0.49.0"])
      s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.9"])
    else
      s.add_dependency(%q<googleauth>.freeze, ["< 0.10.0", ">= 0.6.2"])
      s.add_dependency(%q<grpc>.freeze, ["< 2.0", ">= 1.7.2"])
      s.add_dependency(%q<googleapis-common-protos>.freeze, ["< 2.0", ">= 1.3.5"])
      s.add_dependency(%q<google-protobuf>.freeze, ["~> 3.2"])
      s.add_dependency(%q<rly>.freeze, ["~> 0.2.3"])
      s.add_dependency(%q<codecov>.freeze, ["~> 0.1"])
      s.add_dependency(%q<rake>.freeze, [">= 10.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<rubocop>.freeze, ["= 0.49.0"])
      s.add_dependency(%q<simplecov>.freeze, ["~> 0.9"])
    end
  else
    s.add_dependency(%q<googleauth>.freeze, ["< 0.10.0", ">= 0.6.2"])
    s.add_dependency(%q<grpc>.freeze, ["< 2.0", ">= 1.7.2"])
    s.add_dependency(%q<googleapis-common-protos>.freeze, ["< 2.0", ">= 1.3.5"])
    s.add_dependency(%q<google-protobuf>.freeze, ["~> 3.2"])
    s.add_dependency(%q<rly>.freeze, ["~> 0.2.3"])
    s.add_dependency(%q<codecov>.freeze, ["~> 0.1"])
    s.add_dependency(%q<rake>.freeze, [">= 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rubocop>.freeze, ["= 0.49.0"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.9"])
  end
end

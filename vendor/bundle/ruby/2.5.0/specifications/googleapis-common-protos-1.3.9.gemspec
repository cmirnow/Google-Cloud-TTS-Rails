# -*- encoding: utf-8 -*-
# stub: googleapis-common-protos 1.3.9 ruby lib

Gem::Specification.new do |s|
  s.name = "googleapis-common-protos".freeze
  s.version = "1.3.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google Inc".freeze]
  s.date = "2019-04-03"
  s.email = ["googleapis-packages@google.com".freeze]
  s.homepage = "https://github.com/googleapis/googleapis".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.rubygems_version = "2.7.3".freeze
  s.summary = "Common gRPC and protocol buffer classes used in Google APIs".freeze

  s.installed_by_version = "2.7.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<googleapis-common-protos-types>.freeze, ["~> 1.0"])
      s.add_runtime_dependency(%q<google-protobuf>.freeze, ["~> 3.0"])
      s.add_runtime_dependency(%q<grpc>.freeze, ["~> 1.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.15"])
      s.add_development_dependency(%q<grpc-tools>.freeze, ["~> 1.18"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    else
      s.add_dependency(%q<googleapis-common-protos-types>.freeze, ["~> 1.0"])
      s.add_dependency(%q<google-protobuf>.freeze, ["~> 3.0"])
      s.add_dependency(%q<grpc>.freeze, ["~> 1.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.15"])
      s.add_dependency(%q<grpc-tools>.freeze, ["~> 1.18"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    end
  else
    s.add_dependency(%q<googleapis-common-protos-types>.freeze, ["~> 1.0"])
    s.add_dependency(%q<google-protobuf>.freeze, ["~> 3.0"])
    s.add_dependency(%q<grpc>.freeze, ["~> 1.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.15"])
    s.add_dependency(%q<grpc-tools>.freeze, ["~> 1.18"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
  end
end
